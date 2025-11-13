import { Component, input } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: ` <app-counter (valueChange)="log($event)"></app-counter> `,
  styles: [],
})
export class AppComponent {
  log(value: number): void {
    console.log(value);
  }
}
