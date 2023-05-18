import { Action,  props } from '@ngrx/store';

export enum BookActions {
  LOAD_BOOKS = '[Book Api] Load Books',
  BOOKS_LOADED = '[Book Api] Books Loaded',

  API_ERROR = '[Book Api] Api Error'
}

export class LoadBooks implements Action {
  readonly type = BookActions.LOAD_BOOKS;
  constructor(public options: any) {}
}

export class BooksLoaded implements Action {
  readonly type = BookActions.BOOKS_LOADED;
  constructor(public payload: any) {}
}
