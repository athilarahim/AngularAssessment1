import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  studentArray=[{admno:"1",name:"Athila",dept:"CS"},{admno:"2",name:"Aysha",dept:"Civil"},{admno:"3",name:"Azhar",dept:"CS"},{admno:"4",name:"Hanan",dept:"IT"},{admno:"5",name:"Nanda",dept:"EC"},{admno:"6",name:"Sharron",dept:"civil"},{admno:"7",name:"Akshay",dept:"EC"},{admno:"8",name:"Sriram",dept:"ME"},{admno:"9",name:"Ajay",dept:"IT"},{admno:"10",name:"Aswin",dept:"ME"}]
   
 onDoubleClick(){
  console.log("hiiiiiiiiiiiiiiiiiiiiiii");
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
