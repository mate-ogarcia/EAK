import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>value: {{ value() }}</p>
    <button type="button" (click)="increment()">Increment</button>
  `,
  styles: ``,
})
export class CounterComponent {
  protected readonly value = signal<number>(0);
  readonly valueChange = output<number>();

  increment(): void {
    this.value.update((v) => v + 1);
    this.valueChange.emit(this.value());
  }
}
