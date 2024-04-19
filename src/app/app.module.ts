import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeralComponent } from './modules/geral/geral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterModule,
    GeralComponent
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
