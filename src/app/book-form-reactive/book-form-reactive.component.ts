import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {
  reactiveBookForm: FormGroup;
  wasSubmitted = false;
  inputDetails = {
    title: '',
    author: '',
    genre: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.reactiveBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required),
      // sets "mystery" as default. Validators set required on inputs.
    });
  }
  onSubmit() {
    console.log(this.reactiveBookForm);
    this.wasSubmitted = true;
    this.inputDetails.title = this.reactiveBookForm.value.title;
    this.inputDetails.author = this.reactiveBookForm.value.author;
    this.inputDetails.genre = this.reactiveBookForm.value.genre;
    this.reactiveBookForm.reset();
  }
}
