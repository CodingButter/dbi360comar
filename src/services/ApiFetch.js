import { getItem } from "../store/LocalStorage";

const appServer = `${process.env.REACT_APP_SERVER}crud/`;

const customOptions = {
  headers: {
    method: "GET",
    user_id: getItem("user_id"),
  },
};

const ApiFetch = async (endpoint, options = {}) => {
  const spreadOptions = { ...options, ...customOptions };
  const results = await fetch(`${appServer}${endpoint}`, spreadOptions);
  return await results.json();
};

export default ApiFetch;
