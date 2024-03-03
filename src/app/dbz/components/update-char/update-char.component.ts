import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/Character";
import {UpdateEntity} from "../../interfaces/CharUpdate";
import {v4} from "uuid";

@Component({
  selector: 'dbz-update-char',
  templateUrl: './update-char.component.html',
  styleUrl: './update-char.component.css'
})
export class UpdateCharComponent {

  public Oldname?:string;
  public HeroUpdate:Character = {
    id: v4()
  };
  @Output()
  public EmitterUpdateChar = new EventEmitter<UpdateEntity<Character, string>>();

  public emitUpdateChar(){
    this.EmitterUpdateChar.emit({new_entity: {...this.HeroUpdate}, oldName: this.Oldname});
  }
}
