import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CommunicatorService } from '../communicator.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  characterSelected: Character;

  constructor(private router: ActivatedRoute, private listService: ListService,private utilityRouter: Router) {//ActivatedRoute rappresenta il route corrente
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.characterSelected = this.listService.getCharacterById(params['id']);
      }
    });
  }
  backList(){
    this.utilityRouter.navigate(['/list']);
  }
  edit(){
    this.utilityRouter.navigate(['/edit/'+this.characterSelected.id]); //setta l'id quando si va nella pagina detail
  }
}
