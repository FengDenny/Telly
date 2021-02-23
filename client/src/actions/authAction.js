import axios from "axios";

export const register = async (user) => {
  await axios.post("/api/v1/register", user);
};
