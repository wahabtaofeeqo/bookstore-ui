import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  books: any[] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]

  reviews: any[] = [
    {}, {},
    {}, {} ]

  addToCart(book: Book) {

  }
}
