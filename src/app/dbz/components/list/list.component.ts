import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/Character";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input("personajes")
  public listCharacters:Character[] = []
  @Output()
  private emitterDeletion:EventEmitter<string | undefined> = new EventEmitter<string | undefined>()
  public emitDelete(id?:string):void{
      this.emitterDeletion.emit(id)
  }
}
