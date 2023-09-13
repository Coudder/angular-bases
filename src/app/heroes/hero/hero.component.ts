import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 // backticks ctrl + alt + }

  public name: string = 'Ironman';
  public age:  number = 36;

  //*getter es una propiedad que se ve como una propiedad pero es un metodo por ejemplo this.capitalizane pero es un metodo
  get capitalizeName():string{
    return this.name.toUpperCase();

  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Uroza';
  }

  changeAge():void {
    this.age = 62;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 36;
  }


}
