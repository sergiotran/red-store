export type AdminNavigationItem = {
  children?: AdminNavigationItem[];
  href?: string;
  active?: boolean;
  title: string;
};
export const ADMIN_NAVIGATION_ITEMS: AdminNavigationItem[] = [
  {
    title: 'Quản lí',
    children: [
      { title: 'Chuyên mục', href: '/_/admin/category' },
      { title: 'Sản phẩm', href: '/_/admin/product' },
      { title: 'Mã giảm giá', href: '/_/admin/discount' }
    ]
  },
  { title: 'Người dùng', href: '/_/admin/user' }
];
