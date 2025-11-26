import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ex1component } from './example1.component';
import { MyComponent } from './my-component/my-component';
import { Component2 } from './component2/component2';
import { Profile } from './profile/profile';
import { Forms } from './formscomp/formscomp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ex1component,MyComponent, Component2, Profile, 
            Forms],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  // protected readonly title = signal('helloWorld');
  
  title: string = 'Hello';
  /*
  constructor() {
  console.log('App component initialized');
  const title = 'helloWorld';
  }*/

}
