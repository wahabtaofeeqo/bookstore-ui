import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { routes } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpService) { }

  loadBooks(options: any) {
    return this.http.get(routes.books.get(options))
  }
}
