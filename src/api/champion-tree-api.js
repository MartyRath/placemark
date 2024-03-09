import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const championTreeApi = {
    find: {
        auth: false,
        handler: async function (request, h) {
          try {
            const championTrees = await db.championTreeStore.getAllChampionTrees();
            return championTrees;
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
          }
        },
      },
    
      findOne: {
        auth: false,
        async handler(request) {
          try {
            const championTree = await db.championTreeStore.getChampionTreeById(request.params.id);
            if (!championTree) {
              return Boom.notFound("No user tree with this id");
            }
            return championTree;
          } catch (err) {
            return Boom.serverUnavailable("No user tree with this id");
          }
        },
      },
};