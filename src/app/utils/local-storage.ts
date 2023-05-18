export const getLocalItem = (key: any) => {
  const data: any = localStorage.getItem(key)
  return JSON.parse(data) ?? null;
}

export const addLocalItem = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value))
}
