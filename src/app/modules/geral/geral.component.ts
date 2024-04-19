import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from 'src/app/shared/components/layout/background/background/background.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
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
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.scss'],
})

export class GeralComponent {
  public svgPaths: string[] = [
    'assets/logos/meteoblue.svg',
    'assets/logos/brazil.svg'    
  ]

  public svgPathsSm: string[] = [
    'assets/logos/meteoblue-sm.svg',
    'assets/logos/brazil-sm.svg'    
  ]

  public brandPath: string[] = [
    'assets/brands/tempo-cidade.svg',    'assets/brands/clima-campo.svg',
    'assets/brands/clima-campo.svg',

  ]

  public text: string = "meteoblue® é um dos maiores provedores de dados e mapas meteorológicos globalmente, uma empresa Suíça de classe mundial que se especializou em processar e analisar com Inteligência Artificial (I.A.) grandes volumes de dados ambientais e meteorológicos em todo o planeta. Hoje a meteoblue® atende empresas como Microsoft, Windy, Shell, Mercedez Bens e provê dados e mapas para milhares de Apps e Plataformas em mais de 100 países."

  public buttonColor: string = "var(--button-meteoblue)"
  public buttonTextContent: string = "Baixe documento"
  public buttonIconContent: string = 'assets/icons/download.svg'
  public buttonTextFooter: string = "Contato"
  public buttonIconFooter: string = 'assets/icons/download.svg'

  public images = [
    'assets/images/brazil.png',
    'assets/images/swiss.png'
  ]
}
