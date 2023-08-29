import { Component } from '@angular/core';
import { Point } from '../../models/point.model';
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass'],
})
export class SelectorComponent {
  selectionItems: {
    name: string;
    url: string;
    screenPosition: Point;
    borderColor: string;
    shadowColor: string;
  }[] = [
    {
      name: 'scissors',
      url: 'assets/images/icon-scissors.svg',
      screenPosition: new Point(),
      borderColor: '#eba921',
      shadowColor: '#c86c19',
    },
    {
      name: 'paper',
      url: 'assets/images/icon-paper.svg',
      screenPosition: new Point(),
      borderColor: '#5971f9',
      shadowColor: '#2945c0',
    },
    {
      name: 'rock',
      url: 'assets/images/icon-rock.svg',
      screenPosition: new Point(),
      borderColor: '#da405a',
      shadowColor: '#b6213e',
    },
    {
      name: 'lizard',
      url: 'assets/images/icon-lizard.svg',
      screenPosition: new Point(),
      borderColor: '#8d5de7',
      shadowColor: '#6b3fba',
    },
    {
      name: 'spock',
      url: 'assets/images/icon-spock.svg',
      screenPosition: new Point(),
      borderColor: '#45bdce',
      shadowColor: '#2c8eab',
    },
  ];

  // define width and height for the selection panel
  selectionPanelSize: number = 200; // pixels

  // define width and height for the selection item inside the panel
  selectionItemSize: number = 85; // pixels

  constructor() {
    // define the position for each one of the selection items
    this.selectionItems.forEach((item, index) => {
      let coordinates = this.getCoordinatesOfBall(
        { x: this.selectionPanelSize / 2, y: this.selectionPanelSize / 2 },
        this.selectionPanelSize / 2,
        72 * index + 270,
        this.selectionItemSize
      );
      item.screenPosition = coordinates;
    });
  }

  // calculate the coordinates of a ball using:
  //  -coordinates of a rotation center
  //  -radius lenght
  //  -ball diameter
  //  -angle respect to the horizontal in which the ball is located
  private getCoordinatesOfBall(
    centerCoordinates: Point,
    radiusLength: number,
    angleDegrees: number,
    ballDiameter: number
  ): Point {
    let coordinates: Point = new Point();

    // transform the angle in degrees to radian system
    let angleRadian = angleDegrees / (180 / Math.PI);

    // get the coordinates of the ball
    coordinates.y = Math.sin(angleRadian) * radiusLength;
    coordinates.x = Math.cos(angleRadian) * radiusLength;

    // move the coordinates according to the center
    coordinates.y += centerCoordinates.y;
    coordinates.x += centerCoordinates.x;

    // add fix to the coordinates having into account
    // the ball will be positioned in the screen using a corner and not a the center
    coordinates.y = coordinates.y - ballDiameter / 2;
    coordinates.x = coordinates.x - ballDiameter / 2;

    return coordinates;
  }
}
