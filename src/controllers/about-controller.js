export const aboutController = {
    index: {
      handler: function (request, h) {
        const viewData = {
          title: "About Champion Trees",
        };
        return h.view("about-view", viewData);
      },
    },
  };