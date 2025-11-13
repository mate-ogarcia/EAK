import { Component, inject } from '@angular/core';
import { InMemoryFruitService } from './in-memory-fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    @if(remainingFruits().length === 0) {
    <p>Tu as tout mangé</p>
    } @else {
    <p>
      Il reste
      {{ remainingFruits().length }}
      {{ remainingFruits().length === 1 ? 'fruit' : 'fruits' }}
    </p>
    } @for (fruit of remainingFruits(); track fruit) {
    <button (click)="eatOne(fruit)">{{ fruit }}</button>
    }
  `,
  styles: [],
})
export class AppComponent {
  //Injecter le service dans le composant (nouvelle méthode)
  protected readonly inMemoryFruitService = inject(InMemoryFruitService);
  //Eviter d'utiliser directement le service dans le template directement
  protected readonly remainingFruits =
    this.inMemoryFruitService.remainingFruits;

  eatOne(fruit: Fruit): void {
    this.inMemoryFruitService.eatOne(fruit);
  }
}
