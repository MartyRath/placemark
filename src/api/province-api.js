import Boom from "@hapi/boom";
import { db } from "../models/db.js";


export const provinceApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
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
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const province = await db.userStore.getProvinceByTitle(request.params.title);
        if (!province) {
          return Boom.notFound("No Province with this title");
        }
        return province;
      } catch (err) {
        return Boom.serverUnavailable("No Province with this title");
      }
    },
  },

};