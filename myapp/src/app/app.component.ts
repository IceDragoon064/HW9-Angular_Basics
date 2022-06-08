import { Component } from '@angular/core';

export class PlayingCard{
  cardVal: string;
  suit: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world {{title}}
    <br>
    <!-- Show cards in unordered list. -->
    <table>
      <tr *ngFor="let card of cards">
      <td> <ul> <li> {{card.cardVal}} </li> </ul> </td>
      <td> <ul> <li> {{card.suit}} </li> </ul> </td>
      </tr>
    </table>
    </h1>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Angular';

  cards: PlayingCard[] = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];


}
