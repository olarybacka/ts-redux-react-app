import { ajax } from "rxjs/ajax"

type BaseHeaders = {
  "Content-Type": string
}

const getBaseHeaders = (): BaseHeaders => ({
  "Content-Type": "application/json",
})

const get = (url: string, headers?: any) =>
  ajax.get(url, Object.assign({}, getBaseHeaders(), headers))
const post = (url: string, body: any, headers: any) =>
  ajax.post(url, body, Object.assign({}, getBaseHeaders(), headers))

const put = (url: string, body: any, headers?: any) =>
  ajax.put(url, body, Object.assign({}, getBaseHeaders(), headers))

const patch = (url: string, body: any, headers?: any) =>
  ajax.patch(url, body, Object.assign({}, getBaseHeaders(), headers))
const remove = (url: string, headers?: any) =>
  ajax.delete(url, Object.assign({}, getBaseHeaders(), headers))

export default {
  get,
  post,
  put,
  patch,
  delete: remove,
}
