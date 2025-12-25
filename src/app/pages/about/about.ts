import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About</h1>
    <p>
      This is a sample Angular web application built with:
    </p>
    <ul>
      <li>Angular 21</li>
      <li>Node.js 22</li>
      <li>Standalone Components</li>
    </ul>
  `
})
export class AboutComponent {}
