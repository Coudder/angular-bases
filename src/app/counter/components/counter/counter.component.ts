import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter : {{counter}} </h3>


  <button (click)="increaseBy(+2) ">+1</button>
  <button (click)="reset()" >Reset</button>
  <button (click)="increaseBy(-2)" >-1</button>

  `
})

export class CounterComponent   {
  public counter:number = 10;

  constructor() { }



  increaseBy(value:number):void {

    if(this.counter <= 0) return;

    this.counter +=value;
  }


  reset():void {
    this.counter = 10;
  }


}

/**
 * NOTAS CREAMOS UN COMPONENTE Y ESTE LO DELCARAMOS EN EL APP.MOODULE.TS PARA PODERLO USAR EN EL APP.COMPONENT.HTML
 * PARA CREAR COMPONENTES USAMOS A-COMPONENT
 * PARA MANDAR A LLAMAR ESTE COMPONENTE EN EL APP.COMPONENT.HTML PONEMOS <APP-COUNTER></APP-COUNTER>
 */


//backticks ctrl + alt + }
