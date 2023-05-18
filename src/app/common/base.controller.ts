import { HttpErrorResponse } from "@angular/common/http";
import { keys } from "../utils/constants";
import { getLocalItem } from "../utils/local-storage";

export abstract class BaseComponent {

  user: any;
  protected processing: boolean = false;

  constructor() {
    this.user = getLocalItem(keys.authKey)
  }

  public handleError = (error: HttpErrorResponse) => {

    this.processing = false;
    let errData = error.error;
    let message = errData?.message || error.message;

    // Validation Error
    if (errData?.error) {
      let keys = Object.keys(errData.error);
      message = errData.error[keys[0]][0];
    }

    //
    alert(message || 'Operation not succeeded');
  }
}
