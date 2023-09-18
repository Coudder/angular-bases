import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //*CREAMOS EL EMMITER  PPARA MANDARLO AL PADRE
  @Output()
  public onDeleteCharhacterEmitter:EventEmitter<string> = new EventEmitter();



  @Input() //*CON ESTO LE DECIMOS QUE NUESTRO COMPONENTE PUEDE RECIBIR UNA PROPIEDAD LLAMADA CHARACRTERLIST
  public characterList: Character[] = [
    {
    name: 'Trunks',
    power:10
   }
  ]

  //*CREAMOS EL EVENTO QUE MANDARA EL INDEX AL PADRE
  //evento a emitir index value:number
  onDeleteId(id?:string):void {

     if(!id) return; //si no es obligatorio //nunca se llama si no va el id

    this.onDeleteCharhacterEmitter.emit(id);

  }

  // onDeleteCharacter(index:number):void {



  //   console.log({index});

  // }


}
