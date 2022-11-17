import { Component } from '@angular/core';
import { navItems } from './bh-core/bh-constants/nav-items.const';
import { NavItems } from './bh-core/bh-interfaces/bh-nav-items';

@Component({
  selector: 'bh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bh-page-view';
  navItems: NavItems[] = navItems;
}
