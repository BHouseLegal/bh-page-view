import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit {
  @Input() public services!: Service[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.services)
  }

  getChild(service: Service): any[] {
    return new Array(service.childs);
  }

  getService(service: Service, index: number): string {
    return `${service.main}.${index + 1}`
  }

}
