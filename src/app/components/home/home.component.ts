import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {
    name: 'Saul',
    age: 30
  };

  prueba = [
    'hola', 'como estas?', 'Bien y tu'
  ];

  constructor() { }

  ngOnInit() {
    _.forEach(this.prueba, (item) => {
      console.log('prueba.....', item);
    });
  }

}
