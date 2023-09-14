import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [ //* AQUI SE DECLARAN LOS MODULOSPAR CONSUMIRLOS
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//*EL MODULO ES UN AGRUPADOR
