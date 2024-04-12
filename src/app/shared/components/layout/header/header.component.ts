import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from '../../design-system/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  imports: [
    DropdownComponent
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  
}
