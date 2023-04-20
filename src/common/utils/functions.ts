import slugify from "slugify";
import { Product, Products } from "../types/product.types";
import { CartItem, CartItems } from "../types/cart.types";

export const slugifyTitle = (title: string): string => {
  return slugify(title, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "vi", // language code of the locale to use
    trim: true,
  });
};

export const getCartItem = (product: Product): CartItem => ({
  _id: product._id,
  name: product.name,
  price: product.offerPrice
    ? parseFloat(product.offerPrice)
    : parseFloat(product.regularPrice),
  imageURL: product.image,
  quantity: 1,
  store: "string",
  attributes: product.attributes.map((attribute) => ({
    ...attribute,
    value: attribute.values[0],
  })),
  unit: product.unit,
});
