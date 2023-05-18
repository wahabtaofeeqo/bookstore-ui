import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/common/base.controller';
import { AuthService } from 'src/app/services/auth.service';
import { keys } from 'src/app/utils/constants';
import { addLocalItem } from 'src/app/utils/local-storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent extends BaseComponent {

  form: FormGroup

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private service: AuthService) {
      super()
    this.form = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  process() {

    this.processing = true
    const observable = this.service.register(this.form.value);

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
