import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-team-main',
  templateUrl: './team-main.component.html',
  styleUrls: ['./team-main.component.scss']
})
export class TeamMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMainText(text: string): string[] {
    const mainText = text.split(" ");
    return [mainText[0], mainText.slice(1).join(' ')]
  }
}
