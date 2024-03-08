import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const provinceApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
    },
  },
};