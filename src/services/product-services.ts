import axios from "axios";
import { PRODUCT_URL } from "@/common/utils/constants";

export const getProducts = async () => {
  const url = PRODUCT_URL.base;
  const data = axios.get(url);

  return data;
};

export const getProductDetails = async (id: string) => {
  const url = PRODUCT_URL.base + "/" + id;
  const data = axios.get(url);

  return data;
};
