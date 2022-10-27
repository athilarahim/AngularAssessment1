import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HoverDirective } from './hover.directive';
import { DoubleclickDirective } from './doubleclick.directive';



@NgModule({
  declarations: [
    TableComponent,
    HoverDirective,
    DoubleclickDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
    
  ]
})
export class MainModule { }
