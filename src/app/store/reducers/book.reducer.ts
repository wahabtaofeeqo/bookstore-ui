import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { BookActions } from "../actions/book.actions";
import { Book } from "src/app/models/book";

// State
export interface BookState extends EntityState<Book> {
  error?: any
  loading?: boolean
}

// Adapter
export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();
const initialState: BookState = adapter.getInitialState({

});

/**
 * Reducer
 *
 * @param state
 * @param action
 * @returns
 */
export function reducer(state = initialState, action: any): BookState {
  switch (action.type) {
    case BookActions.LOAD_BOOKS:
      return {
        ...state,
        loading: true
      }

    case BookActions.BOOKS_LOADED:
      return {
        ...adapter.addMany(action.payload.data, state),
        loading: false,
        error: null
      }

    case BookActions.API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}
