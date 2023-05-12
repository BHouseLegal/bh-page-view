import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/bh-core/bh-constants/customers.const';

@Component({
  selector: 'bh-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  public customers: typeof Customers = Customers;

  constructor() { }

  ngOnInit(): void {
  }

}
