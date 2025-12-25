import { Component } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Dashboard</h2>
    <p>Environment: {{ env }}</p>
    <p>API URL: {{ apiUrl }}</p>
  `
})
export class DashboardComponent {
  env = environment.production ? 'Production' : 'Development';
  apiUrl = environment.apiUrl;
}
