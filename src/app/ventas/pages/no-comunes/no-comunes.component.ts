import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Jesus David';
  genero: string = 'masculino';
  bandera: boolean = true;
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando',
  };

  //Slice
  clientesSlice: string[] = [
    'Maria',
    'Pedro',
    'Hernando',
    'Eduardo',
    'Fernando',
  ];

  //KeyValue
  persona = {
    nombre: 'Jesus David',
    edad: 22,
    direccion: 'Valle del Cauca, Colombia',
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  cambiarCliente() {
    if (this.bandera) {
      this.nombre = 'Lina Marcela';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Jesus David';
      this.genero = 'masculino';
    }
    this.bandera = !this.bandera;
  }

  borrarCliente() {
    if (this.clientes.length === 0) {
      this.clientes = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
    } else {
      this.clientes.pop();
    }
  }

  //Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos Respuesta de Promesa');
    }, 3500);
  });
}
