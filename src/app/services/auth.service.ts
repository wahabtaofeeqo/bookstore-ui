import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { routes } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  login(payload: any) {
    return this.http.post(routes.login, payload)
  }

  register(payload: any) {
    return this.http.post(routes.register, payload)
  }
}
