import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'bh-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this._fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

}
