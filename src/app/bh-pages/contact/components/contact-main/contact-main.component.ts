import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMainText(text: string): string[] {
    const mainText = text.split(" ");
    return [mainText[0], mainText.slice(1).join(' ')]
  }

}
