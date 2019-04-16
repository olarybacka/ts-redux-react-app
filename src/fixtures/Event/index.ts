import { Event } from "../../store/Event/"

export const testEvent: Event = {
  id: 1,
  name: "Name",
  startDate: new Date(2019,4,16),
  endDate: new Date(2019,4,23),
  description: "description",
  location: 'location',
  category: {
    id: 1,
    name: 'name'
  }
}
