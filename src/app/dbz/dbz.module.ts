import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";
import { DeleteCharComponent } from './components/delete-char/delete-char.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component';
import { UpdateCharComponent } from './components/update-char/update-char.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
    DeleteCharComponent,
    DeleteAllComponent,
    UpdateCharComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule {}
