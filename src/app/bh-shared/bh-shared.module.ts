import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BhComponentsModule } from '../bh-components/bh-components.module';
import { InputComponent } from './input/input.component';
import { BhPipesModule } from '../bh-core/bh-pipes/bh-pipes.module';
import { InputWrapComponent } from './input-wrap/input-wrap.component';
import { TextAreaComponent } from './text-area/text-area.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    InputComponent,
    InputWrapComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    BhComponentsModule,
    BhPipesModule
  ],
  exports: [
    MainLayoutComponent,
    InputComponent,
    
    TextAreaComponent
  ]
})
export class BhSharedModule { }
