export type Task = {
  id: number
  title: string
  description: string
}

export type TaskState = {
  tasks: ReadonlyArray<Task>
  task: Task | null
  count: number
  previos: number | null
  next: number | null
  error: string
}
