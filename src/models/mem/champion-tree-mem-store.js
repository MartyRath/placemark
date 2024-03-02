const championTrees = [
    {
      species: "Douglas fir",
      location: "Powerscourt Gardens, Enniskerry, Co Wicklow",
      height: 57.5,
      girth: 4.86,
      province: "Leinster"
    },
    {
      species: "Sitka spruce",
      location: "Curraghmore, Portlaw, Co Waterford",
      height: 55.0,
      girth: 6.70,
      province: "Munster"
    },
    {
      species: "Sitka spruce",
      location: "Powerscourt Gardens, Enniskerry, Co Wicklow",
      height: 55.0,
      girth: 6.40,
      province: "Leinster"
    },
    {
      species: "Sitka spruce",
      location: "Caledon Estate, Caledon, Co Tyrone",
      height: 55.0,
      girth: 5.77,
      province: "Ulster"
    },
    {
      species: "Sitka spruce",
      location: "Shelton Abbey, Arklow, Co Wicklow",
      height: 54.5,
      girth: 6.61,
      province: "Leinster"
    },
    {
      species: "Douglas fir",
      location: "Avondale Forest Park, Rathdrum, Co Wicklow",
      height: 54.0,
      girth: 3.44,
      province: "Leinster"
    },
    {
      species: "Wellingtonia",
      location: "Luttrelstown Castle, Castleknock, Co Dublin",
      height: 54.0,
      girth: 6.55,
      province: "Leinster"
    },
    {
      species: "Sitka spruce",
      location: "Tempo Manor, Tempo, Co Fermanagh",
      height: 54.0,
      girth: 5.20,
      province: "Ulster"
    },
    {
      species: "Wellingtonia",
      location: "Caledon Estate, Caledon, Co Tyrone",
      height: 53.5,
      girth: 6.35,
      province: "Ulster"
    },
    {
      species: "Douglas fir",
      location: "Avondale Forest Park, Rathdrum, Co Wicklow",
      height: 53.5,
      girth: 3.34,
      province: "Leinster"
    }
  ];

export const championTreeMemStore = {
    async getAllChampionTrees() {
      return championTrees;
    },

    async getChampionTreesByProvinceTitle(title) {
      return championTrees.filter((wow) => wow.province === title);
    }
};