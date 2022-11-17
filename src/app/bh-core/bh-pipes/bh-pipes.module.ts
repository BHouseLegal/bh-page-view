import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BhTranslatePipe } from './bh-translate.pipe';



@NgModule({
  declarations: [
    BhTranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BhTranslatePipe
  ]
})
export class BhPipesModule { }
