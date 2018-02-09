import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  characterSelected: Character;

  constructor(private communicatorService: CommunicatorService) {
    this.communicatorService.mySubjectO.subscribe((newValue: Character) => {
      this.characterSelected = newValue;
    });
  }
  
}
