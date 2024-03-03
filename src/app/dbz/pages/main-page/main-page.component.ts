import {Component, Input} from '@angular/core';
import { v4 as uuid } from 'uuid';
import {DbzService} from "../../services/dbz.service";
import {Character} from "../../interfaces/Character";
import {UpdateEntity} from "../../interfaces/CharUpdate";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor( private readonly dbzService:DbzService) {

  }
  get characters():Character[]{
    return [...this.dbzService.characters]
  }
  public OnDelete(id?:string):void{
    this.dbzService.Delete(id);
  }
  public onNewCharacter(char:Character){
    this.dbzService.onNew(char);
  }
  public onUpdateCharacter(char:UpdateEntity<Character, string>):void{
    this.dbzService.Update(char)
  }
}
