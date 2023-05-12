import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bh-input-wrap',
  templateUrl: './input-wrap.component.html',
  styleUrls: ['./input-wrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWrapComponent implements OnInit {
  @Input() public isInvalid!: boolean;
  @Input() public isFocus!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
