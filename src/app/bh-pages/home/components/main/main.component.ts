import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'bh-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private currentScrollValue: number = 0;
  public showLogo: boolean = true;

  @HostListener('window:scroll', ['$event.target']) private onScroll($event: any):void {
    this.currentScrollValue = $event.scrollingElement.scrollTop;
    this.showLogo = this.currentScrollValue === 0;
  };

  constructor() { }

  ngOnInit(): void {
  }

  getMainText(text: string): string[] {
    const mainText = text.split(" ");
    return [mainText[0], mainText.slice(1).join(' ')]
  }

}
