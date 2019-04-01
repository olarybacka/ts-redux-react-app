export type Task = {
	id: string
	title: string
	description: string
}
export interface Action<T> {
	type: string
	payload?: T
}
