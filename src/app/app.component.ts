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
  characterSelected: Character;
  constructor(private listService: ListService) {
    this.title = 'Prima Angular App';
    this.items = listService.getCharacterList();
  }
  showValue() {
    alert('valore=' + this.value);
    this.value = 'prova';
  }
  showCharacter(character: Character) {
    this.characterSelected = character;
  }

}
