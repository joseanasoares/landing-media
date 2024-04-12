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


export class DropdownComponent implements OnInit{

    @Output() optionSelected = new EventEmitter()
    public tabs: Array<tab> | null = null
    @Input() options :Array<any> = []
    @Input() openDropdown :boolean = false
    @Input() top? :number;
    @Input() bottom? :number;
    public slcOption :number = 0


    ngOnInit(): void {
        this.slcOption = this.options[0].id
    }

    public onOptionSelected(option :any){
        this.slcOption = option.id
        this.optionSelected.emit(option)
    }
}

