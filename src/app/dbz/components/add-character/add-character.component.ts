import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //*CREAMOS UNA PROPIDADAD DEL TIPO CHARACTER

  //*CREAMOS UN EMITER PARA PODER ENVIAR EL CHARACTER CREADO AL COMPONENTE PADRE
  @Output() //para mandar el character al padre
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  };


  //*METODO PARA EMITIR LOS VALORES DE NUESTRO FORMULARIO
  emitCharacter():void {
    console.log(this.character);

    if( this.character.name.length === 0) return; //no acpetar sin nombre

    //*EMITIMOS NUESTRO CARACTER al componente padre MAINPAGE
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};

    //this.character.name = '';
    //this.character.power = 0;

  }


}
