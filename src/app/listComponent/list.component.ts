import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';



@Component({
    selector: 'list',// nome da mettere nell HTML
    templateUrl: './list.component.html'
})
export class ListComponent {
    @Input()
    items: Character[];// questo è collegato all'attributo items di list inappcomponent.html
    @Output()
    selectedItem: EventEmitter<Character> = new EventEmitter<Character>();

    constructor(){
    
    }

    ngOnInit(){ //sul costruttore queste cose non vanno perchè gli input gli prende dopo
        this.items.push(new Character());
    }
    showData(item: Character) {
        this.selectedItem.emit(item);
    }
}
