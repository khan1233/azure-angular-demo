import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #1976d2;
      padding: 12px;
    }
    a {
      color: white;
      margin-right: 16px;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class NavbarComponent {}
