import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BhPipesModule } from 'src/app/bh-core/bh-pipes/bh-pipes.module';
import { BhSharedModule } from 'src/app/bh-shared/bh-shared.module';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactMainComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BhPipesModule,
    FormsModule, 
    ReactiveFormsModule,
    BhSharedModule
  ]
})
export class ContactModule { }
