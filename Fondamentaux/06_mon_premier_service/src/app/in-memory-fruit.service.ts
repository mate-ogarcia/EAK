import { Injectable, Signal, signal } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root',
})
export class InMemoryFruitService {
  private readonly _fruits = signal<Fruit[]>(['pomme', 'banane', 'ananas']);

  // ---------------------------------------------------------
  // 1) MÉTHODE CLASSIQUE (function)
  // ---------------------------------------------------------
  // ✔ Il faut mettre des parenthèses pour l'appeler.
  // ✔ C'est une fonction classique.
  // Exemple dans un composant :
  //   const fruits = this.fruitService.getRemainingFruits();  // <= parenthèses obligatoires

  // getRemainingFruits(): Signal<Fruit[]> {
  //   return this._fruits;
  // }

  // ---------------------------------------------------------
  // 2) GETTER (propriété calculée)
  // ---------------------------------------------------------
  // ✔ PAS de parenthèses pour l'utiliser.
  // ✔ Ce n'est pas une fonction → c'est une propriété accessible en lecture seule.
  // Exemple dans un composant :
  //   const fruits = this.fruitService.remainingFruits;  // <= PAS de parenthèses

  get remainingFruits(): Signal<Fruit[]> {
    return this._fruits;
  }

  eatOne(fruit: Fruit): void {
    this._fruits.update((previous: Fruit[]) =>
      previous.filter((current: Fruit) => current !== fruit)
    );
  }
}
