import { Component } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.sass'],
})
export default class SelectionItemComponent {
  public itemTypes: {
    name: string;
    url: string;
    borderColor: string;
    shadowColor: string;
  }[] = [
    {
      name: 'scissors',
      url: 'assets/images/icon-scissors.svg',
      borderColor: '#eba921',
      shadowColor: '#c86c19',
    },
    {
      name: 'paper',
      url: 'assets/images/icon-paper.svg',
      borderColor: '#5971f9',
      shadowColor: '#2945c0',
    },
    {
      name: 'rock',
      url: 'assets/images/icon-rock.svg',
      borderColor: '#da405a',
      shadowColor: '#b6213e',
    },
    {
      name: 'lizard',
      url: 'assets/images/icon-lizard.svg',
      borderColor: '#8d5de7',
      shadowColor: '#6b3fba',
    },
    {
      name: 'spock',
      url: 'assets/images/icon-spock.svg',
      borderColor: '#45bdce',
      shadowColor: '#2c8eab',
    },
  ];

  // define the element to show
  @Input()
  item: string = '';

  get ItemIndex(): number {
    return this.itemTypes.findIndex((item) => item.name === this.item);
  }
}
