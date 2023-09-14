import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent // es el que tenemos que exportar porque contiene nuestros demas componentes
  ],
  imports: [
    CommonModule,
    FormsModule //*para usar el ngmodule o el two way databinding
  ]
})
export class DbzModule { }


//*PRIMERO CREAMOS LOS MODULOS SIEMPRE
/**
 * DENTRO YA CREAMOS LOS COMPONENTES QUE SON LOS QUE CONFORMARAN LA PAGINA PRINCIPAL
 * INTERFACES DE COMO LUCIRAN NUESTROS DATOS
 * NUESTROS SERVICIOS
 * Y LAS PAGE QUE ES LA PAGINA QUE CONTENDRA TODOS NUESTROS COMPONENTES
 */
