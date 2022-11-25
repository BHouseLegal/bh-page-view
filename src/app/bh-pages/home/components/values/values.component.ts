import { Component, OnInit } from '@angular/core';
import { Values } from 'src/app/bh-core/bh-constants/values.const';

@Component({
  selector: 'bh-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  public values: typeof Values = Values;

  constructor() { }

  ngOnInit(): void {
  }

}
