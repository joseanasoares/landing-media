import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports:[
    NgIf,
    NgFor
  ],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  @Input() logoSource = ''
  @Input() brandContent: string[] = []; 
}
