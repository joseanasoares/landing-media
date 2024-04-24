import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from 'src/app/shared/components/layout/background/background/background.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ContentComponent } from 'src/app/shared/components/layout/content/content.component';
import { FooterComponent } from 'src/app/shared/components/layout/footer/footer.component';
import { environment } from 'src/environments/environment';

export interface Location{
  id: number;
  image: string;
  flag: string;
  title: string;
  address: string;
  city: string;
}

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


  private assetsDirectory = environment.assetsDirectory;
  private context = environment.context
  private textInput = environment.properties.text

  constructor() {
    console.log(this.context)
    console.log(this.assetsDirectory);

    if (this.context === "meteoblue") {
      console.log('default');

      this.svgPaths = [
        `${this.assetsDirectory}/logo.svg`,
        `${this.assetsDirectory}/brazil.svg`
      ]
    } else {
      console.log(this.context);
      this.svgPaths = [`${this.assetsDirectory}/logo.svg`]
    }
  }

  public svgPaths:string[]



  
  // public svgPaths: string[] = [
  //   'assets/logos/meteoblue.svg',
  //   'assets/logos/brazil.svg'    
  // ]

  public svgPathsSm: string[] = [
    'assets/logos/meteoblue-sm.svg',
    'assets/logos/brazil-sm.svg'    
  ]

  public brandPath: string[] = [
    'assets/brands/tempo-cidade.svg',
    'assets/brands/clima-campo.svg', 
  ]

  public text: string = `${environment.properties.text}`

  public buttonColor: string = "var(--button-meteoblue)"
  public buttonTextContent: string = "Baixar documento"
  public buttonIconContent: string = 'assets/icons/download.svg'
  public buttonTextFooter: string = "Contato"
  public buttonIconFooter: string = `assets/icons/mail.svg`;
  public linkedin: string = `${this.assetsDirectory}/linkedin.svg`;

  public images = [
    'assets/images/brazil.png',
    'assets/images/swiss.png'
  ]

  public location : Location[] = environment.properties.location
}
