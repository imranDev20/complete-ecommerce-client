import { http } from "./http-service";

export const getProducts = () => {
  http("https://jsonplaceholder.typicode.com/posts", "get");
};
