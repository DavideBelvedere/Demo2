import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';
import { CommunicatorService } from '../communicator.service';
import { ListService } from '../list.service';
import { Router } from '@angular/router';




@Component({
    selector: 'list',// nome da mettere nell HTML
    templateUrl: './list.component.html'
})
export class ListComponent {
    items: Character[];

    constructor(private router: Router, private listService: ListService) { }

    ngOnInit() {
        this.items = this.listService.getCharacterList();
    }
    selectItem(item:Character){
        this.router.navigate(['/detail/'+item.id]); //setta l'id quando si va nella pagina detail
    }
    
}
