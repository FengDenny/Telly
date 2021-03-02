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

export const getAccountStatus = async (token) =>
  axios.post(
    "/api/v1/get-account-status",
    {},
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );

export const getAccountBalance = async (token) =>
  axios.post(
    "/api/v1/get-account-balance",
    {},
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );

export const payoutSetting = async (token) =>
  await axios.post(
    "/payout-setting",
    {},
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );

export const currencyFormat = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};
