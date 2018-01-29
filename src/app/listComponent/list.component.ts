import { Component, Input } from '@angular/core';
import { Character } from '../character';


@Component({
    selector: 'list',// nome da mettere nell HTML
    templateUrl: './list.component.html'
})
export class ListComponent {
    @Input()
    items: Character[];

}
