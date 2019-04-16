export interface Task {
  id: number
  title: string
  description: string
}

export interface TaskState {
  tasks: ReadonlyArray<Task>
  task: Task | null
  count: number
  previos: number | null
  next: number | null
  error: string
}
