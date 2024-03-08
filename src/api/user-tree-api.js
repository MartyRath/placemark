/* eslint-disable no-empty-function */
import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const userTreeApi = {
  find: {
    auth: false,
    // eslint-disable-next-line no-empty-function
    handler: async function (request, h) {
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
    },
  },
};