import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'bh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private currentScrollValue: number = 0;
  public showFooter: boolean = true;

  @HostListener('window:scroll', ['$event.target']) private onScroll($event: any):void {
    this.currentScrollValue = $event.scrollingElement.scrollTop;

    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    this.showFooter = this.currentScrollValue === 0 || this.currentScrollValue + 800 > scrollHeight ;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
