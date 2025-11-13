import { Component, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: ` <p>value: {{ value() }}</p>`,
  styles: ``,
})
export class CounterComponent {
  readonly value = input<number>(0);
}
