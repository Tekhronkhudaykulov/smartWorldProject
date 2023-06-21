import axios from "axios";

const baseUrl = `https://spil.four-seasons.uz`;

const url = baseUrl + `/api`;

const $api = axios.create({
  baseURL: url,
});

const token = localStorage.getItem("@token");

$api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

$api.defaults.headers.common["Accept"] = "application/json";
$api.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

// const token = "7NJuSfpecAOJRoJyIbelHyaXHivmKvUI";

// const configToken = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: "application/json",
//   },
// };

// class Api {
//   public readonly api: AxiosInstance;

//   constructor() {
//     makeAutoObservable(this);
//     this.api = axios.create({
//       baseURL: baseUrl,
//     });

//     this.api.interceptors.request.use(
//       async (config: any) => {
//         const tokenFromAsyncStore = localStorage.getItem("@token");

//         this.setAccessToken(tokenFromAsyncStore as string);
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );
//   }

//   private setAccessToken = (accessToken: string) => {
//     this.api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   };
// }

// const $api = new Api().api;
export { baseUrl, $api };
