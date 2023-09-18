//*LAS PAGES ES LA PAGINA QUE SE MOSTRARA ESTA ESTA COMPUESTA POR LOS COMPONENTES CREADOS
//*  LAS PARTES DE LA PAGINA QUE LA COMPONEN


import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent   {

                //!inyectamos nuestro servicio creado
     constructor( private dbzService: DbzService ){}


     //*CREAMMOS UN GETTER PARA OBTENER NUESTRO PERSONAJES
     get characters():Character[]{
      return [...this.dbzService.characters]; //!CREAMOS UNA COPIA PARA NO MODIFICAR EL ORIGINAL CON EL SPREAD
     }

     onDeleteCharacter(id:string):void {

      //accedemos al servicio y llamamos la funcion y le pasamos el di
      this.dbzService.deleteCharacterById(id);

     }

     onNewCharacter(character:Character):void {
      this.dbzService.addCharacter(character);
     }

}
