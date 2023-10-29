export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = sessionStorage.getItem(key);
    if (!jsonState) {
      return undefined;
    }
    return JSON.parse(jsonState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function saveState<T>(state: T, key: string) {
  const stringState = JSON.stringify(state);
  sessionStorage.setItem(key, stringState);
}
