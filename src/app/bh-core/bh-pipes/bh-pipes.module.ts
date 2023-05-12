import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BhTranslatePipe } from './bh-translate.pipe';
import { IsInvalidPipe } from './is-invalid.pipe';
import { HasValidatorPipe } from './has-validator.pipe';



@NgModule({
  declarations: [
    BhTranslatePipe,
    IsInvalidPipe,
    HasValidatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BhTranslatePipe,
    IsInvalidPipe,
    HasValidatorPipe
  ]
})
export class BhPipesModule { }
