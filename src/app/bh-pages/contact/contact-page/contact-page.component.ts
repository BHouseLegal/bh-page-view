import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  
  constructor(
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
