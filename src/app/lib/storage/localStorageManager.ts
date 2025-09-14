export class LocalStorageManager {
  static isClient(): boolean {
    return typeof window !== 'undefined';
  }

  static get<T>(key: string, defaultValue: T): T {
    if (!this.isClient()) return defaultValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  static set<T>(key: string, value: T): void {
    if (!this.isClient()) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }
}
