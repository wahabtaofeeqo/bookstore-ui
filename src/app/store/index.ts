import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';

export interface AppState {
  book: fromBook.BookState
}

export const reducers: ActionReducerMap<AppState> = {
  book: fromBook.reducer
}

// Book state
 export const bookState = (state: AppState) => state.book
 export const bookApiError = createSelector(bookState, (state) => state.error);
