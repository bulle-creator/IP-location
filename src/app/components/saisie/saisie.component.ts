import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HackerService } from '../../services/hacker.service';
import { LookipService } from '../../services/lookip.service';
import { Hacker } from 'src/app/classes/hacker';
import { Router } from '@angular/router';

// IP form et un fromGroup

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})

export class SaisieComponent implements OnInit {

  isSubmitted : boolean = false;
  ipForm!: FormGroup;
  badIP: boolean = false;

  constructor(private hackerService:HackerService,private lookipService:LookipService,private route: Router) {}

  ngOnInit(): void {
    this.ipForm = new FormGroup({
      ip: new FormControl(),
    });
  }

  recherche() {
    
    this.isSubmitted = true;
    console.log('IP saisie', this.ipForm.value);

      if (!this.ipForm.value.ip) {
        this.badIP = true; 
      return;
      }
      else {

        this.lookipService.sendGetRequest(this.ipForm.value.ip).subscribe((data: Object) => {

          let IP: string = "";
          let CN: string = "";       
          let RN: string = "";      
          let CI: string = "";
          // Tableau des clés et des valeurs de l'objet
          
          let keys = Object.keys(data);     
          let values = Object.values(data);
          
          for (let i = 0; i < keys.length; i++) {
            if (keys[i] == 'ip') { IP = values[i]; }
            if (keys[i] == 'country_name') { CN = values[i]; }        
            if (keys[i] == 'region_name') { RN = values[i]; }       
            if (keys[i] == 'city') { CI = values[i]; }        
          }
          
          let leHacker = new Hacker(IP, CN, RN, CI);   
          this.hackerService.addHacker(leHacker);
          });
    this.route.navigate(['/liste']);
    }
  }
}
