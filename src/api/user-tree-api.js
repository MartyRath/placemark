import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, UserTreeSpec, UserTreeSpecPlus, UserTreeArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const userTreeApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const userTrees = await db.userTreeStore.getAllUserTrees();
        return userTrees;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: UserTreeArraySpec, failAction: validationError },
    description: "Get all userTreeApi",
    notes: "Returns all userTreeApi",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: UserTreeSpecPlus, failAction: validationError },
    description: "Finds a user tree",
    notes: "Returns a user tree",
  },

  create: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Create a user tree",
    notes: "Returns the newly created user tree",
    validate: { payload: UserTreeSpec },
    response: { schema: UserTreeSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.userTreeStore.deleteAllUserTrees();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Deletes all userTreeApi",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Delete a user tree",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};