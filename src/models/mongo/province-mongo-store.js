import { Province } from "./province.js";

export const provinceMongoStore = {
  async populateProvinces() {
    const provincesToAdd = [
      { title: "Leinster" },
      { title: "Connacht" },
      { title: "Munster" },
      { title: "Ulster" }
    ];

    const addedProvinces = [];

    provincesToAdd.forEach(async (province) => {
      const newProvince = new Province(province);
      const provinceObj = await newProvince.save();
      addedProvinces.push(provinceObj);
    });

    return addedProvinces;
  }
};