import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hello-world-input',
  template: '<input type="text" class="form-control" [(ngModel)]="data">',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HelloWorldInputComponent),
    multi: true
  }]
})
export class HelloWorldInputComponent implements ControlValueAccessor {

  _data: string;

  get data (): string {
    return `Hello ${this._data}`;
  }

  set data (value: string) {
    this._data = value;
  }

  onChange = (_) => { };
  onTouched = () => { };

  registerOnChange (fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched (fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue (value: any): void {
    this.data = value;
  }

}
