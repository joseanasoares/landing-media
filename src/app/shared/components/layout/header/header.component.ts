import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../design-system/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  imports: [
    DropdownComponent,
    NgStyle
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() lineColor? :string
}
