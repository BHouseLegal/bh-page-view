import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItems } from 'src/app/bh-core/bh-interfaces/bh-nav-items';
import { TranslationService } from 'src/app/bh-core/bh-services/translation.service';

@Component({
  selector: 'bh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() items: NavItems[] = [];
  activeItem!: string;
  public showMobileBar: boolean = false;
  private currentScrollValue: number = 0;
  public showNavBarScroll: boolean = true;

  get showNavbar(): boolean {
    return screen.width < 600 && this.showMobileBar;
  }

  get currentLanguage():  string {
    return this.translateService.getCurrentLanguage();
  }

  @HostListener('window:scroll', ['$event.target']) private onScroll($event: any):void {
    this.showNavBarScroll = this.currentScrollValue === 0 || this.currentScrollValue > $event.scrollingElement.scrollTop;
    this.currentScrollValue = $event.scrollingElement.scrollTop;
  };

  constructor(private router: Router, private translateService: TranslationService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pathName = event.url.split('/');
        if (Boolean(pathName[1])) {
          this.activeItem = pathName[1];
        } 
      }
    })
  }

  

  handleItemSelected(item: NavItems): void {
    this.router.navigateByUrl(item.id)
  }

  toggleShowBar(): void {
    this.showMobileBar = !this.showMobileBar;
  }

  setLanguage(lang: string) {
    this.translateService.setCurrentLanguage(lang);
  }

}
