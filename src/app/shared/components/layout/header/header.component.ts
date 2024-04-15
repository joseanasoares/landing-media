import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
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
  openDropdown = false;
  idiom = [
    { "id": 1, "name": "Português/BR" },
    { "id": 2, "name": "English/US" }
  ]  
  selectedLanguage: any;

  onLanguageSelected(language: any): void {
    this.selectedLanguage = language;
  }

  toggleDropdown(): void {
    this.openDropdown = !this.openDropdown;
  }

}
