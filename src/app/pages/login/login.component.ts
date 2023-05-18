import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/common/base.controller';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { addLocalItem } from 'src/app/utils/local-storage';
import { keys } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent{

  form: FormGroup

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private service: AuthService) {
      super()
    this.form = this.builder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  process() {

    this.processing = true
    const observable = this.service.login(this.form.value);

    // New way
    observable.subscribe({
      next: this.handleNext,
      error: this.handleError
    })
  }

  private handleNext = (res: any) => {

    alert(res.message);
    const data = res.data;
    let user  = {
      ...data.user,
      token: data.accessToken,
    }

    addLocalItem(keys.authKey, user);
    this.router.navigate(['/']);
  }

}
