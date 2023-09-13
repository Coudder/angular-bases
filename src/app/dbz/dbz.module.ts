import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
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
