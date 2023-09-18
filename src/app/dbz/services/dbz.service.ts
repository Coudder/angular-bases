import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";


import { Character } from '../interfaces/character.interface';

//*LOGICA DEL NEGOCIO LAS ACCIONES DE NUESTROS HEROES
//*OBJETIVO TENER LA LOGICA DE NEGOCIO PARA EL MANEJO DE LOS PERSONAJES DE DBZ

@Injectable({
  providedIn: 'root' //?si no viene esto tenemos que defnirilo en la parte de los providers de nuestro app.module.ts
})
export class DbzService {


    public characters :Character[] =[ //*MANDAMOS ESTA PROPIEDAD AL COMPONENTE HIJO ListComponent
      {
        id: uuid(),
        name:'Goku',
        power: 9500
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 9000
      },
      {
        id: uuid(),
        name: 'Krilin',
        power: 500
      }
  ];

 //*RECIBIMOS EL EMMITER CON EL CHARACTER  *INPUT
  addCharacter( character:Character ):void { //se puede desestrcuturar pero si son muchas propiedades que tiene no combiene


    //*CREAMOS UN NUEVO PERSONAJE CONNEL ID DE LA DEPENDENCIA INSTALADA UUID}
                                                //*UTLIMOAZMO EL OPERADOR SPREAD DEL CHARACTER Y LO QUE LE DECIMOS ES
                                                //*TOMA TODAS LAS PROPIEDADES Y ESPARCELOS EN ESTE NUEVO OPBJETO QUE ESTAMOS CREANDO
      const newCharacter:Character = {id: uuid(), ...character}

      // const newCharacter: Character  = {
      //   id: uuid(),
      //   name: character.name,
      //   power: character.power
      // }

      //*AGREGAMOS EL CHARACTER QUE VIENE DEL HIJO AL ARREGLO DE CHACATERS DE AQUI DEL PADRE
      this.characters.push(newCharacter); //al final
      //this.characters.unshift(character); //al inicio del arreglo
      console.log({newCharacter});


  }

  // //*RECIBIMOS EL EMMITER  EN ESTE METODO QUE CREAMOS Output
  // onDeleteCharacter(index:number):void {
  //     //remover el caracter basado en el index splice
  //    this.characters.splice(index,1);

  //   }
  deleteCharacterById(id:string):void {
      //remover el caracter basado en el index splice

      //*FILTER RERESA UN NUEVO ARREGLO CON LA CONDICION QUE LE PUSIMO  EL QUE SEA IGUAL
     this.characters = this.characters.filter(character =>  character.id !== id)
  }



}
