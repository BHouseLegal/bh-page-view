import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, forwardRef, ViewEncapsulation } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'bh-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent extends InputComponent implements ControlValueAccessor {

  constructor(cdRef: ChangeDetectorRef ) {
    super(cdRef)
   }

  ngOnInit(): void {
  }

}
