import { Injectable } from '@angular/core';
import {Character} from "../interfaces/Character";
import {UpdateEntity} from "../interfaces/CharUpdate";
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name:"Krillin",
    power:1000
  },
    {
      id: uuid(),
      name:"Goku",
      power:9500
    },
    {
      id: uuid(),
      name:"Vegetta",
      power:7500
    }
  ];
  public onNew(char:Character):void{
    this.characters .push(char);
  }
  public Delete(id:string | undefined):void{
    let index= this.characters.findIndex((item) => item.id == id)
    if(index !== -1 && index !== undefined) this.characters.splice(index, 1)
    else  this.characters.splice(0)
  }
  public Update({oldName, new_entity}:UpdateEntity<Character, string>):void{
    let index= this.characters.findIndex((item ) => item.name === oldName)
    if (index !== -1)
    {
      this.characters[index] = {...new_entity}
    }
  }
  public isdfa = 234;
  constructor() { }
}
