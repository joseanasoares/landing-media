import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/layout/header/header.component';
import { DropdownComponent } from 'src/app/shared/components/design-system/dropdown/dropdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  idiom = [
    { "index": 1, "name": "Português/BR" },
    { "index": 2, "name": "English/US" }
  ];

  onDropdownClicked(): void {
    console.log('Dropdown container clicked');
  }
}
