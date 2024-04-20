// src/types/NavItem.ts

export type NavItem = {
    title: string;       // The title of the navigation item
    href: string;        // The URL or path the navigation item points to
    icon: string;        // The icon name, assuming Icons can resolve these
    label: string;       // An accessible label for the item
  };
  
  export type SidebarNavItem = {
    title: string;       // The title of the sidebar navigation item
    href: string;        // The URL or path the sidebar item points to
    icon: string;        // The icon name for sidebar, assuming Icons can resolve these
    label: string;       // An accessible label for the sidebar item
    children?: NavItem[]; // Optional children for nested navigation
  };
  