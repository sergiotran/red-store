export type NavigationItem = {
  title: string;
  href: string;
  active?: boolean;
}
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Giới thiệu', href: '/gioi-thieu' },
  { title: 'Sản phẩm', href: '/san-pham' },
];