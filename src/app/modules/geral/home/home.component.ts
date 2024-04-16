import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from 'src/app/shared/components/layout/background/background/background.component';
import { HeaderComponent } from '../../../shared/components/layout/header/header.component';
import { ContentComponent } from 'src/app/shared/components/layout/content/content.component';
import { FooterComponent } from 'src/app/shared/components/layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  svgPaths: string[] = [
    'assets/logos/meteoblue.svg',
    'assets/logos/brazil.svg'    
  ]

  svgPathsSm: string[] = [
    'assets/logos/meteoblue-sm.svg',
    'assets/logos/brazil-sm.svg'    
  ]
}
