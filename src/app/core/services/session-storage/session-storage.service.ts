import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  getSession(key: string): any {
    const ijsKey = 'gitHub-' + key;
    const data = window.sessionStorage.getItem(ijsKey);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  setSession(key: string, value: any): void {
    const ijsKey = 'gitHub-' + key;
    const data = value === undefined ? '' : JSON.stringify(value);
    window.sessionStorage.setItem(ijsKey, data);
  }

  removeSession(key: string): void {
    const ijsKey = 'gitHub-' + key;
    window.sessionStorage.removeItem(ijsKey);
  }

  removeAllSessions(): void {
    for (const key in window.sessionStorage) {
      if (window.sessionStorage.hasOwnProperty(key)) {
        window.sessionStorage.removeItem(key);
      }
    }
  }
}
