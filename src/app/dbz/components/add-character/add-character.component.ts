import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/Character";
import {v4} from "uuid";

@Component({
  selector: 'dbz-add-character',
  templateUrl:  './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();


  public character:Character = {
    id:v4()
  }
  public emitChar():void{

    console.log(this.character)
    if (this.character.name?.length === 0) return;
    this.onNewCharacter.emit({...this.character})
    this.character.name = ""; this.character.power=0;
  }
}
