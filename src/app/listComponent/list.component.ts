import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';



@Component({
    selector: 'list',// nome da mettere nell HTML
    templateUrl: './list.component.html'
})
export class ListComponent {
    @Input()
    items: Character[];
    @Output()
    selectedItem: EventEmitter<Character> = new EventEmitter<Character>();
    showData(item: Character) {
        this.selectedItem.emit(item);
    }
}
