import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMainText(text: string): string[] {
    const mainText = text.split(" ");
    return [mainText[0], mainText.slice(1).join(' ')]
  }
}
