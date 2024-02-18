import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const provinces = await db.provinceStore.getAllProvinces();
      const viewData = {
        title: "Dashboard",
        provinces: provinces,
      };
      return h.view("dashboard-view", viewData);
    },
  },
};