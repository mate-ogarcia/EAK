import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
