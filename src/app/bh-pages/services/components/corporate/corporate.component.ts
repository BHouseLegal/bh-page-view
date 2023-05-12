import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {
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
