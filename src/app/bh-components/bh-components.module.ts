import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BhPipesModule } from '../bh-core/bh-pipes/bh-pipes.module';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SidePanelComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BhPipesModule
  ],
  exports: [
    NavBarComponent,
    SidePanelComponent,
    FooterComponent
  ]
})
export class BhComponentsModule { }
