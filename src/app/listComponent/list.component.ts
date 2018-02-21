import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';
import { CommunicatorService } from '../communicator.service';
import { ListService } from '../list.service';



@Component({
    selector: 'list',// nome da mettere nell HTML
    templateUrl: './list.component.html'
})
export class ListComponent {
    items:Character[];
   constructor(private communicatorService: CommunicatorService, private listService:ListService){}
   ngOnInit(){
       this.items=this.listService.getCharacterList();
   }
}
