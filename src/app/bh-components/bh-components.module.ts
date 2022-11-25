import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BhPipesModule } from '../bh-core/bh-pipes/bh-pipes.module';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ValueItemComponent } from './value-item/value-item.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SidePanelComponent,
    FooterComponent,
    CarouselComponent,
    ValueItemComponent
  ],
  imports: [
    CommonModule,
    BhPipesModule,
    RouterModule,
    CarouselModule,
    BhPipesModule
  ],
  exports: [
    NavBarComponent,
    SidePanelComponent,
    FooterComponent,
    CarouselComponent,
    ValueItemComponent
  ]
})
export class BhComponentsModule { }
