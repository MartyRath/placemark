const provinces = [
  { title: "Leinster" }, 
  { title: "Munster" },
  { title: "Ulster" },
  { title: "Connacht" }
];

export const provinceMemStore = {
  async getAllProvinces() {
    return provinces;
  },

  async getProvinceByTitle(title) {
    return provinces.find(province => province.title === title);
  }
};