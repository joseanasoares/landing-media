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

export class DropdownComponent implements OnInit{
  @Input() options: any[] = [];
  @Input() openDropdown :boolean = false
  @Output() optionSelected = new EventEmitter()
  @Input() top? :number;
  @Input() bottom? :number;

  public selectedOption: any;
  public slcOption: number = 0

  
  ngOnInit(): void {
    if (this.options.length > 0) {
      this.slcOption = this.options[0].id;
    }
  }

  public onOptionSelected(option: any){
    this.selectedOption = option.id;
    this.optionSelected.emit(option)  
  }

}
