import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoSource = ''
  @Input() svgContent: string[] = []; 
  @Input() svgContentSm: string[] = []; 
  @Input() text: string = ''
}
