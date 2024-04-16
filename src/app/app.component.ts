import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeteoblueComponent } from './modules/geral/meteoblue/meteoblue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterModule,
    MeteoblueComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
