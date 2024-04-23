import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeralComponent } from './modules/geral/geral.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterModule,
    GeralComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';


}
