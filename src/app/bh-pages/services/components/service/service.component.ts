import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input() service!: Service;
  @Input() isEven!: boolean;
  @Input() isOdd!: boolean;

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
