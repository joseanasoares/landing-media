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
  templateUrl: './meteoblue.component.html',
  styleUrls: ['./meteoblue.component.scss'],
})

export class MeteoblueComponent {
  svgPaths: string[] = [
    'assets/logos/meteoblue.svg',
    'assets/logos/brazil.svg'    
  ]

  svgPathsSm: string[] = [
    'assets/logos/meteoblue-sm.svg',
    'assets/logos/brazil-sm.svg'    
  ]

  brandPath: string[] = [
    'assets/brands/tempo-cidade.svg',
    'assets/brands/clima-campo.svg',
  ]

  text: string = "meteoblue® é um dos maiores provedores de dados e mapas meteorológicos globalmente, uma empresa Suíça de classe mundial que se especializou em processar e analisar com Inteligência Artificial (I.A.) grandes volumes de dados ambientais e meteorológicos em todo o planeta. Hoje a meteoblue® atende empresas como Microsoft, Windy, Shell, Mercedez Bens e provê dados e mapas para milhares de Apps e Plataformas em mais de 100 países."

  buttonColor: string = "var(--button-meteoblue)"
  buttonText: string = "Baixe documento"
  buttonIcon: string = 'assets/icons/download.svg'
}
