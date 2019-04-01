import { Action } from './Task'

export default <T>(type: string) => ({
	type,
	create: (payload?: T): Action<T> => ({ type, payload })
})
