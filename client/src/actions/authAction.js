import axios from "axios";

export const register = async (user) =>
  await axios.post("/api/v1/register", user);

export const login = async (user) => await axios.post("/api/v1/login", user);

//update user in localStorage
export const updateUserInLocalStorage = async (user, next) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.user = user;
    localStorage.setItem("auth", JSON.stringify(auth));
    next();
  }
};
