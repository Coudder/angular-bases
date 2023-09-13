import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [ //PARA PODERLO CONSUMIR FUERA DEL SCOPE DEL COUNTER
    CounterComponent
  ]
})
export class CounterModule {

}
