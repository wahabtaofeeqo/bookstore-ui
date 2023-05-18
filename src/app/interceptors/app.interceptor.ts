import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { getLocalItem } from 'src/app/utils/local-storage';
import { keys } from '../utils/constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = getLocalItem(keys.authKey);
    if(user) {
      request = request.clone({setHeaders: {
          'Authorization': 'Bearer ' + user.token}
      })
    }
    return next.handle(request);
  }

  handleError(error: any) {
    return throwError(error);
  }
}
