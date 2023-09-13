import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';



@NgModule({

  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [ //!PARA PODER USAR LAS DIRECTIVAS NGIF NG FOR ETC SE IMPORTA EL COMMONMODULE
    CommonModule
  ]


})
export class HeroesModule {}
