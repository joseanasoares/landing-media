import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports:[
    NgStyle
  ],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent{
  @Input() background: string =''
  @Input() videoSource: string=''

  constructor() { }
}
