module.exports = () => ({
  tasks: [
    {
      id: 1,
      title: "Task #1",
      description: "Description #1",
    },
    {
      id: 2,
      title: "Task #2",
      description: "Description #2",
    },
    {
      id: 3,
      title: "Task #3",
      description: "Description #3",
    },
  ],
  comments: [],
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
      name: 'test',
      startDate: new Date(),
      endDate: new Date(),
      description: "Event 1",
      location: 'string',
      category: {
        id: 1,
        name: 'string'
      }
    },
    {
      id: 2,
      name: 'test 2',
      startDate: new Date(),
      endDate: new Date(),
      description: "Event 2",
      location: 'string',
      category: {
        id: 2,
        name: 'string'
      }
    }
  ],
})
