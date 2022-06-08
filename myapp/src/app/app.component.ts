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
    {{card.cardVal}} of {{card.suit}}.
    {{card1.cardVal}} of {{card1.suit}}
    </h1>
    Card: <input [(ngModel)]="card.cardVal">`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Angular';

  card: PlayingCard = {
    cardVal: "Ace",
    suit: "Spades"
  };

  card1: PlayingCard = {
    cardVal: "Queen",
    suit: "Diamonds"
    };
}
