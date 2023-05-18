import { CanActivateFn } from '@angular/router';
import { getLocalItem } from '../utils/local-storage';
import { keys } from '../utils/constants';

export const authGuard: CanActivateFn = (route, state) => {

  let user = getLocalItem(keys.authKey)
  if (!user) {
    state.url = '/login'
    return false
  }

  //
  return true;
};

