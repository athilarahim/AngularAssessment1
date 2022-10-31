import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  studentArray=[{admno:"1",name:"Athila",dept:"CS",show:''},
  {admno:"2",name:"Aysha",dept:"Civil",show:''},
  {admno:"4",name:"Hanan",dept:"IT",show:''},
  {admno:"6",name:"Sharron",dept:"Civil",show:''},
  {admno:"7",name:"Akshay",dept:"EC",show:''},
  {admno:"8",name:"Sriram",dept:"ME",show:''},
  {admno:"3",name:"Nanda",dept:"IT",show:''},
  {admno:"5",name:"Azhar",dept:"CS",show:''},
  {admno:"9",name:"Sabari",dept:"ME",show:''},
  {admno:"10",name:"Arya",dept:"EC",show:''},
]
  ad=Object.keys(this.studentArray[0])[0]
  nm=Object.keys(this.studentArray[0])[1]
  dp=Object.keys(this.studentArray[0])[2]


 EditValue(column:any,inputvalue:string,index:any){
if(column==this.ad)
index.admno=inputvalue
else if(column==this.nm)
index.name=inputvalue
else if(column==this.dp)
index.dept=inputvalue
index.show='';
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
