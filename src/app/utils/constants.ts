import { environment } from "src/environments/environment";
import { QueryBuilder } from "./query.builder";

export const baseUrl = environment.api;
export const routes = {

  login: baseUrl + 'auth/login',
  register: baseUrl + 'auth/register',

  books: {
    base: baseUrl + 'books',
    get: (options: any) => {
      if(options) {
        let query = QueryBuilder.toQuery(options);
        return `${baseUrl}books${query}`
      }
      return baseUrl + 'books'
    },
  },
}

export const keys = {
  authKey: 'auth-user',
}
