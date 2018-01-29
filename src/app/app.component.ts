import { Component } from '@angular/core';
import { Character } from './character';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  // items: (string|number)[]=[];
  items: Character[] = [];
  value: string;
  constructor() {
    this.title = 'Prima Angular App';
    let listService: ListService = new ListService();
    this.items = listService.getCharacterList();
  }
  showValue() {
    alert('valore=' + this.value);
    this.value = 'prova';
  }
}
