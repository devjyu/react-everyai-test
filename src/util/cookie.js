import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (name, value, option) => {
  console.log("너를 위해 구웠지", name, value, option);
  return cookies.set(name, value, { ...option });
};

export const getAccessToken = (name) => {
  console.log("내가 만든 쿠키~", cookies.get(name));
  return cookies.get(name);
};

export const removeAccessToken = (name, option) => {
  return cookies.remove(name, { ...option });
};

export const setRefreshToken = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getRefreshToken = (name) => {
  return cookies.get(name);
};

export const removeRefreshToken = (name, option) => {
  return cookies.remove(name, { ...option });
};
