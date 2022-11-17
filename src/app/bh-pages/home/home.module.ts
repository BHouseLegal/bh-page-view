import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { BhSharedModule } from 'src/app/bh-shared/bh-shared.module';
import { MainComponent } from './components/main/main.component';
import { BhPipesModule } from 'src/app/bh-core/bh-pipes/bh-pipes.module';
import { HistoryComponent } from './components/history/history.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { BhComponentsModule } from 'src/app/bh-components/bh-components.module';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { ValuesComponent } from './components/values/values.component';


@NgModule({
  declarations: [
    PageComponent,
    MainComponent,
    HistoryComponent,
    ObjectivesComponent,
    TestimoniesComponent,
    ValuesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BhPipesModule, 
    BhComponentsModule
  ]
})
export class HomeModule { }
