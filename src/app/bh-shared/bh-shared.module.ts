import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BhComponentsModule } from '../bh-components/bh-components.module';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    BhComponentsModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class BhSharedModule { }
