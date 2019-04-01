const PORT: number = 4000
const HOST: string = "localhost"
const PROTOCOL: string = "http"

export const apiUrl = (endpoint: string): string => `${PROTOCOL}://${HOST}:${PORT}/${endpoint}/`
