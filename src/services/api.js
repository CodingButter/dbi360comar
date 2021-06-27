import { getItem } from "../store/LocalStorage";
import ApiFetch from "./ApiFetch";
export const getUserProducts = async () => {
  return await ApiFetch("read/products");
};

export const getUserId = () => {
  return getItem("user_id");
};
