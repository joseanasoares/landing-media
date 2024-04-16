import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from '../../design-system/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  imports: [
    DropdownComponent,
    NgStyle,
    NgClass
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  openDropdown = false;
  idiom = [
    { "id": 1, "name": "Português/BR" },
    { "id": 2, "name": "English/US" },
    { "id": 3, "name": "French/FR"}
  ]  

  selectedLanguage: any = this.idiom[0];

  onLanguageSelected(language: any): void {
    this.selectedLanguage = language;
  }

  toggleDropdown(): void {
    this.openDropdown = !this.openDropdown;
    console.log('click')
  }

  getDropdownOptions(): any[] {
    // Filter out the selected language from the dropdown options
    return this.idiom.filter(lang => lang.id !== this.selectedLanguage.id);
  }

}
