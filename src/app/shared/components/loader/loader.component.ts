import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  colorList: string[] = [
    '#61D800', // --l-green-dark
    '#75E900', // --l-green
    '#90EE02', // --l-green-light
    '#DD0074', // --l-red-dark
    '#EE0290', // --l-red-light
    '#29B6F6', // --l-blue-light
    '#4FC3F7', // --l-blue
    '#81D4FA'  // --l-blue-dark
  ];

  currentColorIndex = 0;
  intervalId: any;

  constructor(public layoutService: LayoutService){

  }

  ngOnInit() {
    // Start rotating colors at a specified interval (e.g., every 2 seconds)
    this.intervalId = setInterval(() => {
      this.rotateColors();
    }, 500);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    clearInterval(this.intervalId);
  }

  rotateColors() {
    const firstColor: any = this.colorList.shift(); // Remove the first color
    this.colorList.push(firstColor); // Add it to the end
  }
}
