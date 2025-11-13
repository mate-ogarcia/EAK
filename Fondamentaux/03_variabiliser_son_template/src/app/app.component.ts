import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `{{ content }}`,
})
export class AppComponent {
  protected content = 'Hello world!';
}
