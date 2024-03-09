import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const userTreeApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const userTrees = await db.userTreeStore.getAllUserTrees();
        return userTrees;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const userTree = await db.userTreeStore.getUserTreeById(request.params.id);
        if (!userTree) {
          return Boom.notFound("No user tree with this id");
        }
        return userTree;
      } catch (err) {
        return Boom.serverUnavailable("No user tree with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        // Retrieve data from POST
        const provinceTitle = request.params.title;
        const { userId, userTree } = request.payload;
        const newUserTree = await db.userTreeStore.addUserTree(provinceTitle, userId, userTree);
        if (newUserTree) {
          return h.response(newUserTree).code(201);
        }
        return Boom.badImplementation("error creating user tree");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.userTreeStore.deleteAllUserTrees();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const treeId = request.params.treeid;
        console.log(treeId);
        const userTree = await db.userTreeStore.getUserTreeById(treeId);
        if (!userTree) {
          return Boom.notFound("No user tree with this id");
        }
        await db.userTreeStore.deleteUserTree(userTree._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No user tree with this id");
      }
    },
  },
};