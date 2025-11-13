import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  styles: `
  :host {
    h1 {
      font-style: italic;
      font-size: 3rem;
      color: blue;
    }

    .custom-style {
      color: green;
      text-transform: uppercase;
    }
}`,
  template: `
    <h1>Hello world!</h1>
    <article>
      <p class="custom-style">
        Angular n'a jamais été aussi facile à apprendre.
      </p>
    </article>
  `,
})
export class HelloComponent {}
