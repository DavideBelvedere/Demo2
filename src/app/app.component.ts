import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  // items: (string|number)[]=[];
  items: Character[] = [];
  value:string;
  constructor() {
    this.title = 'Prima Angular App';
    this.items.push({type:'cattivo',name:'ursula',age:69});
    this.items.push(new Character('cattivo','ursula',69));
    this.items.push(new Character('buono','superman',12));
    this.items.push(new Character('cattivo'));
  }
  showValue(){
    alert('valore='+ this.value);
    this.value='prova';
}
}
