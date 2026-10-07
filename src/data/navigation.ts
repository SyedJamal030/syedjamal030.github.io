import type { NavItem } from "~/types";

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 * 
    // { label: 'Journal', href: '/journal/' },
    // { label: 'Journal', href: '/journal/', anchor: '#journal' },
    // { label: "RSS", href: "/rss.xml" },
 */

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/", anchor: "#about" },
  { label: "Services", href: "/services/", anchor: "#services" },
  { label: "Work", href: "/work/", anchor: "#work" },
  { label: "Contact", href: "/contact/" },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: "Toolkit", href: "/about/#toolkit" },
  { label: "Process", href: "/about/#process" },
  { label: "Testimonials", href: "/about/#testimonials" },
  { label: "FAQ", href: "/contact/#faq" },
];

export const footerNav = {
  explore: [
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Selected work", href: "/work/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavItem[],
  legal: [
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" },
  ] satisfies NavItem[],
};
