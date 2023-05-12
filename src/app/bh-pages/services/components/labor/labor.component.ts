import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {
  @Input() public services!: Service[];

  

  constructor() { }

  ngOnInit(): void {
  }

  getChild(service: Service): any[] {
    return new Array(service.childs);
  }

  getService(service: Service, index: number): string {
    return `${service.main}.${index + 1}`
  }

}
