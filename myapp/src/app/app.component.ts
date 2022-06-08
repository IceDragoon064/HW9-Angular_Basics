import { Component } from '@angular/core';




export class PlayingCard{
  cardVal: string;
  suit: string;
}
@Component({
  selector: 'app-root',
  template: '<h1>Hello world {{title}}<br> {{card.cardVal}} of {{card.suit}}. </h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Angular';

  card: PlayingCard = {
    cardVal: "Ace",
    suit: "Spades"
  };
}
