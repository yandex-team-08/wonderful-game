export const setSessionStorage = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key: string) => {
  const item = sessionStorage.getItem(key)

  return item ? JSON.parse(item) : null
}
