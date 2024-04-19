import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { LocationCardComponent } from '../../design-system/location-card/location-card.component';
import { ButtonComponent } from '../../design-system/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgStyle,
    LocationCardComponent,
    ButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() image: string[] = []
  @Input() location: Array<any> = [];
  @Input() buttonColor: string = ''
  @Input() buttonIcon: string =''
  @Input() buttonText: string =''
}
