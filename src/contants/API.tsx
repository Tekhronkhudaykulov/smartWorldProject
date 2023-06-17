import axios from "axios";

const baseUrl = `https://spil.gptuz.uz`;

const url = baseUrl + `/api`;

const api = axios.create({
  baseURL: url,
});

api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

const token = "4qCzJbP8h5iHQK7TBS8Xx-AlJAbtyx8k";

const configToken = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};
export { baseUrl, api, configToken };
