import { Component, OnInit } from '@angular/core';
import { Hacker } from '../../classes/hacker';
import { HackerService } from '../../services/hacker.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent implements OnInit {

  lesHackers: Hacker[];
  nbOflesHackers: number;

  constructor(private hackerService: HackerService) {
    this.lesHackers = this.hackerService.getAllHackers();
    this.nbOflesHackers = this.lesHackers.length;
  }

  ngOnInit(): void {
    // Si le tableau est vide, on le dit
    
    if (this.nbOflesHackers > 0) {
      console.log('contenu :' + this.lesHackers[0].ip);
      console.log('contenu :' + this.lesHackers[0].country_name);
      console.log('contenu :' + this.lesHackers[0].region_name);
      console.log('contenu :' + this.lesHackers[0].city);
    }
    else {
      console.log('Tableau Hackers vide !');
    }
  }
}