import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private router: Router,
    private client: HttpClient) { }

  get(url: any) {
    return this.client.get<any>(url).pipe(catchError(this.handleError));
  }

  post(url: string, body: any) {
    return this.client.post<any>(url, body).pipe(catchError(this.handleError));
  }

  put(url: string, body: any) {
    return this.client.put<any>(url, body).pipe(catchError(this.handleError));
  }

  patch(url: string, body: any) {
    return this.client.patch<any>(url, body).pipe(catchError(this.handleError));
  }

  delete(url: string) {
    return this.client.delete<any>(url).pipe(catchError(this.handleError));
  }

  handleError = (error: HttpErrorResponse) => {

    // Unauthorized error
    if(error.status == HttpStatusCode.Unauthorized) {
      this.router.navigate(['/login']);
    }

    return throwError(error);
  }
}
