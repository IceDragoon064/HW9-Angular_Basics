import { Component } from '@angular/core';

export class PlayingCard{
  cardVal: string;
  suit: string;
}

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="myinput">
    <input type='button' (click)=doSomething(myinput)>
    {{myoutput}}
  <br>
    <input [(ngModel)]="myinput1">
    <input type='button' (click)=doSomething1(myinput1)>
    {{myoutput1}}
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myinput = '';
  myoutput = '';
  myinput1 = '';
  myoutput1 = '';

  doSomething(someContent){
      alert(someContent);
      this.myoutput = someContent;
  }

  doSomething1(someContent1){
    alert(someContent1);
    this.myoutput1 = someContent1;
}
}
