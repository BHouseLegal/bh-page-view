import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';


@Component({
  selector: 'bh-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  @Input() public service!: Service;
  
  get child(): any[] {
    return new Array(this.service.childs);
  }

  constructor() { }

  ngOnInit(): void {
  }

  getService(index: number): string {
    return `${this.service.main}.${index + 1}`
  }

}
