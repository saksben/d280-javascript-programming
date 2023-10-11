import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit{
 countryName: string | null = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    //listens for mouseover for each country
    const paths = this.elementRef.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('mouseover', (event: MouseEvent) => {
        //console.log(path.getAttribute('id'));
        this.countryName = path.getAttribute('id');
        //console.log(this.countryName);
      })
    });
  }
}