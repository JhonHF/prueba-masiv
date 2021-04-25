import axios from "axios";

export const applyInterceptors = () => {
  axios.defaults.baseURL = "https://xkcd.com";
};
