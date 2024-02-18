import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const addProvinces = await db.provinceStore.populateProvinces();
      const viewData = {
        title: "Champion Trees Dashboard",
        user: loggedInUser,
        provinces: addProvinces,
      };
      return h.view("dashboard-view", viewData);
    },
  },

};
