import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { LogoComponent } from '../../design-system/logo/logo.component';
import { InputComponent } from '../../design-system/input/input.component';
import { BrandComponent } from '../../design-system/brand/brand.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LogoComponent, InputComponent, BrandComponent, NgFor],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() svgPaths: string[] = [];
  @Input() svgPathsSm: string[] = [];
  @Input() brandPath: string[] = [];
  @Input() text: string = '';
  svgContent: string[] = [];
  svgContentSm: string[] = [];
  brandContent: string[] = [];

  ngOnInit(): void {
    this.loadIcons();
  }

  loadIcons(): void {
    this.svgPaths.forEach((path) => {
      this.svgContent.push(path);
    });

    this.svgPathsSm.forEach((path) => {
      this.svgContentSm.push(path);
    });

    this.brandPath.forEach((path) => {
      this.brandContent.push(path)
    })
  }
}
