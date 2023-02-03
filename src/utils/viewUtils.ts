import { Response } from "express";
import type { NavigationItem } from '@redStore/constants/navigation';

type ViewData = {
  title: string,
  copyrightYear?: number;
  menu_items?: NavigationItem[]
  [field: string]: any
};
export const getViewData = (obj: ViewData, res: Response): ViewData => {
  const copyrightYear = new Date().getFullYear();

  return {
    ...obj,
    menu_items: res.locals.menu_items,
    copyrightYear,
  };
}