import { Injectable } from '@angular/core';
import { Hacker } from '../classes/hacker';

@Injectable({
  providedIn: 'root'
  })
  
export class HackerService {
  private hackers: Hacker[];

  constructor() {
    this.hackers = [];
  }

  getAllHackers() {
    this.hackers = JSON.parse(localStorage.getItem('Hackers') || '[]');
    return this.hackers;
  }

  addHacker(hacker: Hacker) {
    this.hackers.push(hacker);

    let tabItems = JSON.stringify(this.hackers);
    localStorage.setItem('Hackers', tabItems);
  }
}