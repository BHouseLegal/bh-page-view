import { Component, Input, OnInit } from '@angular/core';
import { NavItems } from 'src/app/bh-core/bh-interfaces/bh-nav-items';

@Component({
  selector: 'bh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() items: NavItems[] = [];
  @Input() activeItem: string = '';
  public showMobileBar: boolean = false;

  get showNavbar(): boolean {
    return screen.width < 600 && this.showMobileBar;
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleItemSelected(item: NavItems): void {
    this.activeItem = item.id;
  }

  toggleShowBar(): void {
    this.showMobileBar = !this.showMobileBar;
  }

}
