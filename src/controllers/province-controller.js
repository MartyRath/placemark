import { db } from "../models/db.js";

export const provinceController = {
  index: {
    handler: async function (request, h) {
      const province = await db.provinceStore.getProvinceById(request.params.id);
      const viewData = {
        title: "province",
        province: province,
      };
      return h.view("province-view", viewData);
    },
  },

  addTree: {
    handler: async function (request, h) {
      const province = await db.provinceStore.getProvinceById(request.params.id);
      const newTree = {
        title: request.payload.title,
        artist: request.payload.artist,
        duration: Number(request.payload.duration),
      };
      await db.treeStore.addTree(province._id, newTree);
      return h.redirect(`/province/${province._id}`);
    },
  },
};