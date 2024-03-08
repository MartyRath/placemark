import { userApi } from "./api/user-api.js";
import { provinceApi } from "./api/province-api.js";

export const apiRoutes = [
  // User routes
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  // Province routes
  { method: "GET", path: "/api/provinces", config: provinceApi.find },
  { method: "GET", path: "/api/provinces/{id}", config: provinceApi.findOne },
  // User tree routes

  // Champion tree routes
];