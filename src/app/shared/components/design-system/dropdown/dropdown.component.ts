import { Component, EventEmitter, Input, OnInit, Output     } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';

interface tab {
  id :number
  name: string
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

export class DropdownComponent{
  @Input() options: any[] = [];
  @Input() openDropdown :boolean = false
  @Output() optionSelected = new EventEmitter()

  public selectedOption: any;
  public slcOption: number = 0

  onDropdownContainerClicked(): void {
    this.openDropdown = !this.openDropdown; 
  }

  public onOptionSelected(option: any){
    this.selectedOption = option;
    this.optionSelected.emit(option)  
    console.log(option)
  }

}
