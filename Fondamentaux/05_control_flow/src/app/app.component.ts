import { Component, input, signal } from '@angular/core';
import { CounterComponent } from './counter.component';
@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <app-counter (valueChange)="setScore($event)"></app-counter>
    @if (score() > 0 && score() < 4) {
      <p>Lance toi dans le game.</p>
    } @else if (score() >= 4 && score() < 8) {
    <p>Bien joué continue.</p>
    } @else if (score() >= 8 && score() < 10) {
      <p>Encore un petit effort, tu y es presque</p>
    } @else if (score() >= 10) {
      <p>Bravo, à partir de maintenant, c'est du bonus</p>
    } @for (roman of scores(); track roman) {
      <p>{{ roman }}</p>
    }
  `,
  styles: [],
})
export class AppComponent {
  protected readonly score = signal<number>(0);
  protected readonly scores = signal<string[]>([]);

  setScore(value: number): void {
    this.score.set(value);
    this.scores.update((previous) => [
      ...previous,
      value <= 10 ? romanNumbers[value] : '...',
    ]);
  }
}

const romanNumbers: Record<number, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
};
