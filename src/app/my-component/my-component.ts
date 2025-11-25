import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  standalone: true
})
export class MyComponent {
    imageUrl = 'cats/cat.jpg';
}
