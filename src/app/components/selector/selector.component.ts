import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass'],
})
export class SelectorComponent {
  selectionItems: {
    name: string;
    url: string;
    xpos: number;
    ypos: number;
    borderColor: string;
    shadowColor: string;
  }[] = [
    {
      name: 'scissors',
      url: 'assets/images/icon-scissors.svg',
      xpos: 0,
      ypos: 0,
      borderColor: '#eba921',
      shadowColor: '#c86c19',
    },
    {
      name: 'paper',
      url: 'assets/images/icon-paper.svg',
      xpos: 0,
      ypos: 0,
      borderColor: '#5971f9',
      shadowColor: '#2945c0',
    },
    {
      name: 'rock',
      url: 'assets/images/icon-rock.svg',
      xpos: 0,
      ypos: 0,
      borderColor: '#da405a',
      shadowColor: '#b6213e',
    },
    {
      name: 'lizard',
      url: 'assets/images/icon-lizard.svg',
      xpos: 0,
      ypos: 0,
      borderColor: '#8d5de7',
      shadowColor: '#6b3fba',
    },
    {
      name: 'spock',
      url: 'assets/images/icon-spock.svg',
      xpos: 0,
      ypos: 0,
      borderColor: '#45bdce',
      shadowColor: '#2c8eab',
    },
  ];

  // define width and height for the selection panel
  selectionPanelSize: number = 200; // pixels

  // define width and height for the selection item inside the panel
  selectionItemSize: number = 120; // pixels

  constructor() {
    // define the position for each one of the selection items
  }
}
