import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from 'src/app/shared/components/layout/background/background/background.component';
import { HeaderComponent } from '../../../shared/components/layout/header/header.component';
import { DropdownComponent } from 'src/app/shared/components/design-system/dropdown/dropdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

}
