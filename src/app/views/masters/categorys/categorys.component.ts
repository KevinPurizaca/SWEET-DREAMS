import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss'
})
export class CategorysComponent implements OnInit{

  formSearch:FormGroup;
  formRegisterEdit:FormGroup;


  lstCategorys:any[]=[];
  lstState:ComboModel[]=[];

  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;

  titleEditRegisterCategory:string ='';
  vmEditRegisterCategory:boolean = false;

  
  uploadedFiles: any[] = [];

  req ={
    
    inumero_pagina: 0,
    itotal_pagina: ROWS_DEFAULT
  }
  
  
constructor(
  fs:FormBuilder,
  fre:FormBuilder
){
  this.formSearch = fs.group({
    txtName:[''],
    intState:[-1]
  })

  this.formRegisterEdit = fre.group({
    txtName:[''],
    intState:[-1]
  });
}

  ngOnInit(): void {
    
  }

  saveCategory():void{

  }

}
