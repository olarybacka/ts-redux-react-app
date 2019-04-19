module.exports = () => ({
  users: [],
  categories: [
    {
      id: 1,
      name: "Category #1",
    },
    {
      id: 2,
      name: "Category #2",
    },
    {
      id: 3,
      name: "Category #2",
    },
  ],
  events: [
    {
      id: 1,
      name: "Event #1",
      startDate: new Date(),
      endDate: new Date(),
      description: "Description #1",
      location: "location",
      category: {
        id: 1,
        name: "category #1",
      },
    },
    {
      id: 2,
      name: "Event #2",
      startDate: new Date(),
      endDate: new Date(),
      description: "Description #2",
      location: "location",
      category: {
        id: 2,
        name: "category #2",
      },
    },
    {
      id: 3,
      name: "Event #3",
      startDate: new Date(),
      endDate: new Date(),
      description: "Description #3",
      location: "location",
      category: {
        id: 3,
        name: "category #3",
      },
    },
  ],
})
