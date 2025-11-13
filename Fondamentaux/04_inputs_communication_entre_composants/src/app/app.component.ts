import { Component, input } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <app-counter [value]="count"></app-counter>
    <button type="button" (click)="increment()">Increment</button>
  `,
  styles: [],
})
export class AppComponent {
  protected count = 0;

  increment(): void {
    this.count++;
  }
}
