//*LAS PAGES ES LA PAGINA QUE SE MOSTRARA ESTA ESTA COMPUESTA POR LOS COMPONENTES CREADOS
//*  LAS PARTES DE LA PAGINA QUE LA COMPONEN


import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent   {
                    //interface que creamos
  public characters :Character[] =[ //*MANDAMOS ESTA PROPIEDAD AL COMPONENTE HIJO ListComponent
    {
      name:'Goku',
      power: 9500
   },
   {
    name: 'Vegeta',
    power: 9000
   },
   {
    name: 'Krilin',
    power: 500
   }
 ];



}
