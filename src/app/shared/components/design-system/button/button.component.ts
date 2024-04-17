import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports:[
    NgStyle
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonColor : string = ''
  @Input() buttonIcon: string =''
  @Input() buttonText: string =''

}
