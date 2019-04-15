export type Event = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    description: string
    location: string
    category: Category
}

export type Category = {
    id: number
    name: string
}

export type EventState = {
    events: ReadonlyArray<Event>
    event: Event | null
    count: number
    previos: number | null
    next: number | null
    error: string
}
