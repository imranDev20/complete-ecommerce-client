import { HeaderLinksType } from "../types/global.types";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

const BASE_PRODUCT_URL = API_DOMAIN + "/products";

export const PRODUCT_URL = {
  base: BASE_PRODUCT_URL,
};

export const HEADER_LINKS: HeaderLinksType = {
  home: {
    name: "Home",
    route: "/",
    showInNav: true,
  },
  products: {
    name: "Products",
    route: "/products",
    showInNav: true,
  },
  cart: {
    name: "Cart",
    route: "/cart",
    showInNav: false,
  },
};
