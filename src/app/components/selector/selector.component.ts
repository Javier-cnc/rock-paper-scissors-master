import { Component, EventEmitter, Output } from '@angular/core';
import { Point } from '../../models/point.model';
import { ApplicationState, FinalResult } from 'src/app/models/enum.model';
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass'],
})
export class SelectorComponent {
  selectionItems: {
    name: string;
    screenPosition: Point;
    defeatedBy: string[];
  }[] = [
    {
      name: 'scissors',
      screenPosition: new Point(),
      defeatedBy: ['rock', 'spock'],
    },
    {
      name: 'paper',
      screenPosition: new Point(),
      defeatedBy: ['lizard', 'scissors'],
    },
    {
      name: 'rock',
      screenPosition: new Point(),
      defeatedBy: ['paper', 'spock'],
    },
    {
      name: 'lizard',
      screenPosition: new Point(),
      defeatedBy: ['rock', 'scissors'],
    },
    {
      name: 'spock',
      screenPosition: new Point(),
      defeatedBy: ['lizard', 'paper'],
    },
  ];

  FinalResultEnum = FinalResult;
  ApplicationStateEnum = ApplicationState;

  // define the current state of the game
  state: ApplicationState = ApplicationState.USER_PICKING;

  // indicates the result of the game for the user
  //  -false (the user lose)
  //  -true (the user win)
  finalResult: FinalResult = FinalResult.UNDEFINED;

  // indicates the item selected by the user
  userPickedItemName: string = 'lizard';

  // indicates the item selected by the house
  housePickedItemName: string = '';

  // define width and height for the selection panel
  selectionPanelSize: number = 200; // pixels

  // define width and height for the selection item inside the panel
  selectionItemSize: number = 85; // pixels

  @Output()
  scoreChanged: EventEmitter<number> = new EventEmitter<number>();

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
  selectItem(itemName: string) {
    // set the selected item
    this.userPickedItemName = itemName;

    // change the game status
    this.state = ApplicationState.HOUSE_PICKING;

    // set an interval of time in which the computer is going
    // to complete its selection
    setTimeout(() => {
      // generate random index
      var random = Math.random() * (this.selectionItems.length - 1);
      this.housePickedItemName = this.selectionItems[Math.round(random)].name;

      let scoreChange: number = 0;

      // check for a TIE
      if (this.housePickedItemName === this.userPickedItemName) {
        this.finalResult = FinalResult.TIE;
      } else {
        // determine the result of the contest
        var userSelectedItem = this.selectionItems.find(
          (item) => item.name === this.userPickedItemName
        );
        // check if the item picked by the house is in the list of elements who
        // defeat the item picked by the user

        var enemy = userSelectedItem?.defeatedBy.find(
          (enemy) => enemy === this.housePickedItemName
        );
        // if the enemy exist, then the user loose, if not the user wins
        // set the state of the application to final
        this.finalResult = enemy ? FinalResult.LOST : FinalResult.WIN;

        if (this.finalResult === FinalResult.WIN) {
          scoreChange = 1;
        } else if (this.finalResult === FinalResult.LOST) {
          scoreChange = -1;
        }
      }

      this.notifyScoreChange(scoreChange);
    }, 1000);
  }

  resetState() {
    this.state = ApplicationState.USER_PICKING;
    this.housePickedItemName = '';
    this.userPickedItemName = '';
    this.finalResult = FinalResult.UNDEFINED;
  }

  notifyScoreChange(newChange: number) {
    this.scoreChanged.emit(newChange);
  }

  get FinalResultText(): string {
    switch (this.finalResult) {
      case FinalResult.LOST:
        return 'LOST';
      case FinalResult.WIN:
        return 'WIN';
      case FinalResult.TIE:
        return 'TIE';
      default:
        return '';
    }
  }
}
