import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'jesus david';
  nombreUpper: string = 'JESUS DAVID';
  nombreCompleto: string = 'JeSuS DaVid MeJiA';

  fecha: Date = new Date(); //Dia de hoy

  constructor() {}

  ngOnInit(): void {}
}
