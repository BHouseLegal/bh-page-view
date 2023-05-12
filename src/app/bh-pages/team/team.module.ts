import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamPageComponent } from './team-page/team-page.component';
import { TeamMainComponent } from './components/team-main/team-main.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { BhPipesModule } from 'src/app/bh-core/bh-pipes/bh-pipes.module';
import { BhSharedModule } from 'src/app/bh-shared/bh-shared.module';


@NgModule({
  declarations: [
    TeamPageComponent,
    TeamMainComponent,
    TeamMemberComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    BhPipesModule,
    BhSharedModule
  ]
})
export class TeamModule { }
