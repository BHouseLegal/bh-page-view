import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BhComponentsModule } from './bh-components/bh-components.module';
import { BhSharedModule } from './bh-shared/bh-shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BhComponentsModule,
    BhSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
