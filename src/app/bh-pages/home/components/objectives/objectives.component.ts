import { Component, Input, OnInit } from '@angular/core';
import { Objectives } from 'src/app/bh-core/bh-constants/objectives.const';
import { NavItems } from 'src/app/bh-core/bh-interfaces/bh-nav-items';

@Component({
  selector: 'bh-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {
  public objectives: NavItems[];

  constructor() {
    this.objectives = Objectives;
  }

  ngOnInit(): void {
  }

}
