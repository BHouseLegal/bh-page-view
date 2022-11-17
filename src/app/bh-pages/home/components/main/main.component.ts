import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMainText(text: string): string[] {
    const mainText = text.split(" ");
    return [mainText[0], mainText.slice(1).join(' ')]
  }

}
