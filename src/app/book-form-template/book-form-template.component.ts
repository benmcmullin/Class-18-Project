import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {

  formHasBeenSubmitted = false;

  inputDetails = {
    title: "",
    author: "",
    genre: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm) {
    console.log("Submitted", formObj)
    this.formHasBeenSubmitted= true;
    this.inputDetails.title = formObj.value.title;
    this.inputDetails.author = formObj.value.author;
    this.inputDetails.genre = formObj.value.genre;
    formObj.reset();
  }

}
