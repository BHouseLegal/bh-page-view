import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/bh-core/bh-constants/services.const';
import { Service } from 'src/app/bh-core/bh-interfaces/bh-service';

@Component({
  selector: 'bh-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  public services: Service[] = SERVICES;

  constructor() {
   }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
