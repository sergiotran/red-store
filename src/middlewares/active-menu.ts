import { Request, Response, NextFunction } from 'express';
import {
  ADMIN_NAVIGATION_ITEMS,
  AdminNavigationItem
} from '../constants/admin';
import { NAVIGATION_ITEMS } from '../constants/navigation';

export default function activeMenuMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isAdmin = req.originalUrl.startsWith('/_/admin');

  const handleActiveMenuWithDropdown = (items: AdminNavigationItem[]) => {
    items = items.map((item) => {
      return {
        ...item,
        active:
          (item.children || []).some((item) => item.href === req.originalUrl) ||
          item.href === req.originalUrl,
        children: handleActiveMenuWithDropdown(item.children || [])
      };
    });
    return items || [];
  };

  const enchantedMenuItems = NAVIGATION_ITEMS.map((item) => ({
    ...item,
    active: req.originalUrl === item.href
  }));

  res.locals.menu_items = isAdmin
    ? handleActiveMenuWithDropdown(ADMIN_NAVIGATION_ITEMS)
    : enchantedMenuItems;

  next();
}
