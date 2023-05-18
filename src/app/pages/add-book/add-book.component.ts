import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/common/base.controller';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent extends BaseComponent {

  form: FormGroup
  selectedFile: any

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private service: BookService) {
      super()
    this.form = this.builder.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(100)]],
      description: ['', Validators.required]
    })
  }

  process() {

    this.processing = true
    const payload = this.form.value;
    payload.image = 'default.jpg'; // Temp

    const observable = this.service.add(payload);
    observable.subscribe({
      next: (res) => {
        alert(res.message)
        this.router.navigate(['/'])
      },
      error: this.handleError
    })
  }

  handleFile(e: any) {
    this.selectedFile = e.target.files[0]
  }
}
