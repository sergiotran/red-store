import { Request, Response, NextFunction } from "express";
import { NAVIGATION_ITEMS } from '../constants/navigation';

export default function activeMenuMiddleware(req: Request, res: Response, next: NextFunction ) {
  const enchantedMenuItems = NAVIGATION_ITEMS.map((item) => ({
    ...item,
    active: req.originalUrl === item.href
  }));

  res.locals.menu_items = enchantedMenuItems;

  next();
}