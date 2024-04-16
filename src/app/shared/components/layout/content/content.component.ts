import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { LogoComponent } from '../../design-system/logo/logo.component';
import { InputComponent } from '../../design-system/input/input.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    LogoComponent,
    InputComponent,
    NgFor
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  @Input() svgPaths: string[] = [];
  @Input() svgPathsSm: string[] = [];
  svgContent: string[] = [];
  svgContentSm: string[] = [];

  ngOnInit(): void {
    this.loadSVGs();
  }

  loadSVGs(): void {
    this.svgPaths.forEach(path => {
        this.svgContent.push(path); 
    });

    this.svgPathsSm.forEach(path => {
      this.svgContentSm.push(path); 
  });
  }
}
