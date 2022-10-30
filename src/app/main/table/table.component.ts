import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  studentArray=[{admno:"1",name:"Athila",dept:"CS"},{admno:"2",name:"Aysha",dept:"Civil"},{admno:"4",name:"Hanan",dept:"IT"},{admno:"6",name:"Sharron",dept:"Civil"},{admno:"7",name:"Akshay",dept:"EC"},{admno:"8",name:"Sriram",dept:"ME"}]
   
 onDoubleClick(disp:string,value:string){
  
  
  var getval:any= document.getElementById(value) as HTMLInputElement
  var getid:any=document.getElementById(disp) as HTMLInputElement

  
 
    getval.removeAttribute("hidden")

    getid.setAttribute("hidden",true)
  
  
  
 }
 EditValue(insertid:string,curid:string,hidd:string){
  var insertval:any=(document.getElementById(insertid) as HTMLInputElement)
  var currid:any=(document.getElementById(curid) as HTMLInputElement)
  var hiddenid:any=(document.getElementById(hidd) as HTMLInputElement)

  hiddenid.setAttribute("hidden",true)


  currid.textContent=insertval.value

  currid.removeAttribute("hidden")
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
