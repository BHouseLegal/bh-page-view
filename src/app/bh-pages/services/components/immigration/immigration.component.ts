import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements OnInit {
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
