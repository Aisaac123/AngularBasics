import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "ironman";
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  getHeroDesc():string{
    return `${this.name} - ${this.age}`
  }
  chageName():void{
    this.name = "Spiderman"
  }
    public isda:number=234;

  changeAge():void{
      this.age = 25;
  }
  restForm():void{
    this.age = 45;
    this.name = "ironMan"
  }
}
