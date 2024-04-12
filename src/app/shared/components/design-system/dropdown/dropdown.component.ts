import { Component, EventEmitter, Input, OnInit, Output     } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';

interface tab {
  id :number
  active? :boolean,
  link? :string,
  name? :string,
  value? :string,
  tabs?: Array<tab>
}



@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  imports:[
    CommonModule,
    NgClass,
    NgIf
  ],
  styleUrls: ['./dropdown.component.scss']
})


export class DropdownComponent {
  @Input() options: Array<any> = [];
  @Output() dropdownClicked = new EventEmitter<void>();

  onItemClick(item: any): void {
  }

  onDropdownContainerClicked(): void {
    this.dropdownClicked.emit();
  }

}

