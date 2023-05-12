import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { ServiceComponent } from './components/service/service.component';
import { BhPipesModule } from 'src/app/bh-core/bh-pipes/bh-pipes.module';
import { CorporateComponent } from './components/corporate/corporate.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { LaborComponent } from './components/labor/labor.component';
import { ImmigrationComponent } from './components/immigration/immigration.component';
import { DefenseComponent } from './components/defense/defense.component';
import { FundamentalsComponent } from './components/fundamentals/fundamentals.component';


@NgModule({
  declarations: [
    ServicePageComponent,
    ServicesMainComponent,
    ServiceComponent,
    CorporateComponent,
    CommercialComponent,
    LaborComponent,
    ImmigrationComponent,
    DefenseComponent,
    FundamentalsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    BhPipesModule
  ]
})
export class ServicesModule { }
