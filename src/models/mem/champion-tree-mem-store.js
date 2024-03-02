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
      pronvince: "Munster"
    },
    {
      species: "Sitka spruce",
      location: "Powerscourt Gardens, Enniskerry, Co Wicklow",
      height: 55.0,
      girth: 6.40,
      pronvince: "Leinster"
    },
    {
      species: "Sitka spruce",
      location: "Caledon Estate, Caledon, Co Tyrone",
      height: 55.0,
      girth: 5.77,
      pronvince: "Ulster"
    },
    {
      species: "Sitka spruce",
      location: "Shelton Abbey, Arklow, Co Wicklow",
      height: 54.5,
      girth: 6.61,
      pronvince: "Leinster"
    },
    {
      species: "Douglas fir",
      location: "Avondale Forest Park, Rathdrum, Co Wicklow",
      height: 54.0,
      girth: 3.44,
      pronvince: "Leinster"
    },
    {
      species: "Wellingtonia",
      location: "Luttrelstown Castle, Castleknock, Co Dublin",
      height: 54.0,
      girth: 6.55,
      pronvince: "Leinster"
    },
    {
      species: "Sitka spruce",
      location: "Tempo Manor, Tempo, Co Fermanagh",
      height: 54.0,
      girth: 5.20,
      pronvince: "Ulster"
    },
    {
      species: "Wellingtonia",
      location: "Caledon Estate, Caledon, Co Tyrone",
      height: 53.5,
      girth: 6.35,
      pronvince: "Ulster"
    },
    {
      species: "Douglas fir",
      location: "Avondale Forest Park, Rathdrum, Co Wicklow",
      height: 53.5,
      girth: 3.34,
      pronvince: "Leinster"
    }
  ];

export const championTreeMemStore = {
    async getAllChampionTrees() {
      return championTrees;
    },
};