import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //*CREAMOS UNA PROPIDADAD DEL TIPO CHARACTER
  public character: Character = {
    name: '',
    power: 0
  };


  //*METODO PARA EMITIR LOS VALORES DE NUESTRO FORMULARIO
  emitCharacter():void {
    console.log(this.character);

  }


}
