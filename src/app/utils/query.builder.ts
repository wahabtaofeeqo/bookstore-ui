export interface QueryOptions {
  page?: number;
  limit?: number;
  sortBy?: any
}

export class QueryBuilder {
  static toQuery(query: QueryOptions | any) {

    let q = `?page=
      ${query.page || 1}
      &limit=${query.limit || 10}
      &sortBy=${query.sortBy || 'id'}`;

    for (const key of Object.keys(query))
      if(!q.includes(key)) q += `&${key}=${query[key]}`

    return q;
  }
}
