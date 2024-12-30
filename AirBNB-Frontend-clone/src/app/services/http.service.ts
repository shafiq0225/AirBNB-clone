import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  BASE_URL = isDevMode() ? '//localhost:3030/api/' : 'https://airbnb-clone-backend-ne7i.onrender.com/api/'
  // BASE_URL = isDevMode() ? '//localhost:3030/api/' : '/api/'
  // BASE_URL = isDevMode() ? 'https://airbnb-rktw.onrender.com/api/' : '/api/'


  public get(endpoint: string, data?: any) {
    return this.httpRequest(endpoint, 'get', data)
  }

  private httpRequest(endpoint: string, method: string, data = null) {
    try {
      const option = {
        body: data,
      }
      return this.http.request(method, `${this.BASE_URL}${endpoint}`, option)
    } catch (err: any) {
      console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
      console.dir(err)
      if (err.response && err.response.status === 401) sessionStorage.clear()
      throw err
    }
  }
}
