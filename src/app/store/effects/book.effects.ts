import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError } from "rxjs/operators";
import { map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { BookActions, BooksLoaded } from "../actions/book.actions";
import { BookService } from "src/app/services/book.service";


@Injectable()
export class BookEffects {
  constructor(
    private action$: Actions,
    private service: BookService) {}

  loadBooks$ = createEffect((): any =>
    this.action$.pipe(
      ofType(BookActions.LOAD_BOOKS),
      mergeMap((action: any) => this.service.loadBooks(action.options).pipe(
        map((res: any) => new BooksLoaded(res)),
        catchError((e: any) => {
          return of({type: BookActions.API_ERROR, payload: e});
        })
      ))
    ))
}
