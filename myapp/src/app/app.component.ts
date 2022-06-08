import { Component } from '@angular/core';

export class PlayingCard{
  cardVal: string;
  suit: string;
}

@Component({
  selector: 'app-root',
  template: `
<ul *ngFor="let item of firstNames; let i = index">
<li>{{"Item"+ i+":"+item}}</li>
</ul>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNames = ['abe', 'amy', 'al'];s
}
