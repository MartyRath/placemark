import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const provinceApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const provinces = await db.provinceStore.getAllProvinces();
        return provinces;
      } catch (err) {
        return Boom.serverUnavailable("Database Error"); // Boom turns to standard HTTP error
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const province = await db.provinceStore.getProvinceByTitle(title);
        if (!province) {
          return Boom.notFound("No province with this title");
        }
        return province;
      } catch (err) {
        return Boom.serverUnavailable("No province with this title");
      }
    },
  },

};