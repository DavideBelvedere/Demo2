import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../list.service';
import { Character } from '../character';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  characterSelected:Character;
  constructor(private router: ActivatedRoute, private listService: ListService,private utilityRouter: Router) {//ActivatedRoute rappresenta il route corrente
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.characterSelected = this.listService.getCharacterById(params['id']);
      }
    });
  }

  ngOnInit() {
    
  }

}
