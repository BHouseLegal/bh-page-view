import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bh-value-item',
  templateUrl: './value-item.component.html',
  styleUrls: ['./value-item.component.scss']
})
export class ValueItemComponent implements OnInit {
  @Input() value!: {title: string, label: string, imageName: string};

  constructor() { }

  ngOnInit(): void {
  }

}
