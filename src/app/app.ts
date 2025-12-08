import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ex1component } from './example1.component';
import { MyComponent } from './my-component/my-component';
import { Component2 } from './component2/component2';
import { Profile } from './profile/profile';
import { Forms } from './formscomp/formscomp';
// import { AngDirectives } from './ang-directives/ang-directives';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { Reactiveforms } from './reactiveforms/reactiveforms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ex1component,MyComponent, Component2, Profile, 
            Forms, TemplateDrivenForm, Reactiveforms],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  // protected readonly title = signal('helloWorld');
  
  title: string = 'Form';
  /*
  constructor() {
  console.log('App component initialized');
  const title = 'helloWorld';
  }*/

}
