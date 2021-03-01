import axios from "axios";

export const createConnectAccount = async (token) =>
  await axios.post(
    "/api/v1/create-connect-account",
    {},
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );
