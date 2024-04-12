import { Component } from '@angular/core';
import { HomeComponent } from './modules/geral/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    HomeComponent,
    RouterModule
  ],
  styleUrls: ['./app.component.scss'],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>

    <h1>Rent Houses!</h1>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'homes';
}
