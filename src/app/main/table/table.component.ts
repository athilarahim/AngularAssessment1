import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  studentArray=[{admno:"1",name:"Athila",dept:"CS",show:false},{admno:"2",name:"Aysha",dept:"Civil",show:false},{admno:"4",name:"Hanan",dept:"IT",show:false},{admno:"6",name:"Sharron",dept:"Civil",show:false},{admno:"7",name:"Akshay",dept:"EC",show:false},{admno:"8",name:"Sriram",dept:"ME",show:false}]
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
index.show=false;
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
