export type Task = {
  id: string
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
