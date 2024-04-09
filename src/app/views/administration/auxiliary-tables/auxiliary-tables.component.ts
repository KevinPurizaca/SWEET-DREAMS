import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { UtilService } from 'src/app/core/util/util.services';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-auxiliary-tables',
  standalone: true,
  imports: [    
    SharedModule    
  ],
  templateUrl: './auxiliary-tables.component.html',
  styleUrl: './auxiliary-tables.component.scss'
})
export class AuxiliaryTablesComponent implements OnInit {

  formSearch:FormGroup;
  formRegisterEditTableHeadboard:FormGroup;
  formRegisterEditTableDetail:FormGroup;

  lstTableHeadboard:any[]=[];
  lstTableDetail:any[]=[];


  lsTableHeadboardDto!:any ;
  titleEditRegisterTableHeadboard:string ='';
  vmEditRegisterTableHeadboard:boolean = false;
  submitted: boolean = false;

  lsTableDetailDto!:any ;
  titleEditRegisterTableDetail:string ='Detalle Tabla';
  vmEditRegisterTableDetail:boolean = false;

  lstState:ComboModel[]=[];

  totalRecord:number = 0;
  first:number = 0;

  totalRecordDetail:number = 0;
  firstDetail:number = 0;

  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;

  paramTDState = PARAMS_AUXILIAR.STATES;

  bUpdateAccess:boolean = false;
  bDeleteAccess:boolean = false;
  bCreateAccess:boolean = false;

  loadingDataHead :boolean = false;
  loadingDataTbleDetail :boolean = false;
  loadingSaveHead :boolean = false;
  loadingSaveDetail :boolean = false;
  loadingEditDetail :boolean = false;

  req ={
    iid_table_headboard:-1,
    vdescription:'',
    istate_record:-1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }

  reqDetail ={
    iid_table_detail:-1,
    iid_table_headboard:-1,
    iid_detail:-1,
    vdescription:'',

    vvalue_text_1:'',
    vvalue_text_2:'',
    vvalue_text_3:'',

    vvalue_integer_1:-1,
    vvalue_integer_2:-1,
    vvalue_integer_3:-1,

    vvalue_decimal_1:-1,
    vvalue_decimal_2:-1,
    vvalue_decimal_3:-1,

    istate_record:-1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }

  constructor(
    fs:FormBuilder,
    fr:FormBuilder,
    fred:FormBuilder,
    private router: Router,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
    private utilService: UtilService,

  ){
    this.formSearch = fs.group({
      txtDescription :[''],
      intState:[1]
    });

    this.formRegisterEditTableHeadboard = fr.group({
      txtDescription :['',[Validators.required]],
      intState:[1/*,[Validators.required]*/]
    });
    this.formRegisterEditTableDetail = fred.group({
      txtDescription :['',[Validators.required]],

      txtValueText1 :[''],
      txtValueText2 :[''],
      txtValueText3 :[''],

      intValueInteger1:[null],
      intValueInteger2:[null],
      intValueInteger3:[null],

      intValueDecimal1:[null],
      intValueDecimal2:[null],
      intValueDecimal3:[null],

      intState:[1/*,[Validators.required]*/],
    });       
  }

  ngOnInit(): void {
    this.loadStateCB();
    this.loadDataTableHeadboard(this.req);
    this.getSecurity();
  }


  viewModal(type:number,item:any){
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    switch(type){
      case 1:
        this.formRegisterEditTableHeadboard.markAsUntouched();
        this.formRegisterEditTableHeadboard.reset();        
        this.lsTableHeadboardDto = {};
        this.lsTableHeadboardDto.iid_table_headboard = 0;
        this.titleEditRegisterTableHeadboard = "Registrar Tabla Cabecera"
        this.vmEditRegisterTableHeadboard = true;
        break;
      case 2 :
        this.titleEditRegisterTableHeadboard = "Editar Tabla Cabecera"
        this.lsTableHeadboardDto = item;
        this.vmEditRegisterTableHeadboard = true;
        break;
        case 3 :
          this.formRegisterEditTableDetail.markAsUntouched();
          this.formRegisterEditTableDetail.reset(); 
          // this.titleEditRegisterTableDetail = "Tabla Detalle"
          this.lsTableDetailDto = {};
          this.lsTableDetailDto.iid_table_headboard = item.iid_table_headboard;
          this.loadDataTableDetail(item.iid_table_headboard);
          this.vmEditRegisterTableDetail = true;
          break;

    }
  }

  //#region  TABLE HEADBOARD

  loadDataTableHeadboard(req:any){
    this.loadingDataHead = true;    

    this.lstTableHeadboard = [];
    this.httpCoreService.post(req,Endpoints.GetListTableHead).subscribe(res => {
      if(res.isSuccess){
        this.lstTableHeadboard = res.data;   
        this.totalRecord = res.iTotal_record;
      }
      else {
        this.commonService.HanddleErrorMessage(res);
      }
      this.loadingDataHead = false;    

    })
  }
  searchTableHead(){
    let value = this.formSearch.value;

    this.req.istate_record = value.intState;
    this.req.vdescription = value.txtDescription;
    this.req.iindex = 0;

    this.loadDataTableHeadboard(this.req);
  }


  saveTableHeadboard(){
    this.submitted = true;

    let value = this.formRegisterEditTableHeadboard.value;
    for (let c in this.formRegisterEditTableHeadboard.controls) {
      this.formRegisterEditTableHeadboard.controls[c].markAsTouched();
    }

    if (this.formRegisterEditTableHeadboard.valid) {
      this.loadingSaveHead = true;

      let req ={
        iid_table_headboard: this.lsTableHeadboardDto.iid_table_headboard,
        vdescription:value.txtDescription,
        istate_record:value.intState,
        iuser_token:1
      }
      this.httpCoreService.post(req,Endpoints.RegisterTableHead).subscribe(res => {
        if(res.isSuccess){
          this.loadDataTableHeadboard(this.req);
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.vmEditRegisterTableHeadboard = false;
        }
        else {
          this.commonService.HanddleErrorMessage(res);
        }
        this.loadingSaveHead = false;

      })
    }
  }

  changePageTableHeadboard(event: any) {
    this.req.iindex = event.first;
    this.req.ilimit = event.rows;
    this.first = event.first;
    this.loadDataTableHeadboard(this.req);
  }

  deleteTableHeadboard(event: any, item: any) {
    
    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
    
        this.httpCoreService.delete(Endpoints.DeleteTableHead + item.iid_table_headboard).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.loadDataTableHeadboard(this.req);
          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })
    
      },
      reject: () => { }
    });
  }

  //#endregion

  //#region  TABLE DETAIL

  loadDataTableDetail(iid_table_headboard:any){
      this.lstTableDetail = [];
      this.reqDetail.iid_table_headboard =  iid_table_headboard;
      this.loadingDataTbleDetail = true;

      this.httpCoreService.post(this.reqDetail,Endpoints.GetListTableDetail).subscribe(res => {
        if(res.isSuccess){
          this.lstTableDetail = res.data;       
          this.totalRecordDetail = res.iTotal_record;
        }
        else {
          this.commonService.HanddleErrorMessage(res);
        }
        this.loadingDataTbleDetail = false;
      })
  }

  saveOrEditTableDetail(isEdit: boolean, data: any) {
    
    if(!isEdit){
      for (let c in this.formRegisterEditTableDetail.controls) {
        this.formRegisterEditTableDetail.controls[c].markAsTouched();
      }
      if (this.formRegisterEditTableDetail.valid) {
      }
      else{
        this.loadingSaveDetail  = false;
        this.loadingEditDetail  = false;
        return
      }
    }

    this.httpCoreService.post(data, Endpoints.RegisterTableDetail).subscribe(res => {
        if (res.isSuccess) {
          this.formRegisterEditTableDetail.reset();
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.loadDataTableDetail(data.iid_table_headboard);
        } else {
          this.commonService.HanddleErrorMessage(res);
        }
        this.loadingSaveDetail  = false;
        this.loadingEditDetail  = false;
    });

  }

  saveTableDetail() {
    let value = this.formRegisterEditTableDetail.value;
    let data: any = {
      iid_table_detail: 0,
      iid_table_headboard: this.lsTableDetailDto.iid_table_headboard,
      vdescription: value.txtDescription,
      vvalue_text_1: value.txtValueText1,
      vvalue_text_2: value.txtValueText2,
      vvalue_text_3: value.txtValueText3,
      vvalue_integer_1: value.intValueInteger1,
      vvalue_integer_2: value.intValueInteger2,
      vvalue_integer_3: value.intValueInteger3,
      vvalue_decimal_1: value.intValueDecimal1,
      vvalue_decimal_2: value.intValueDecimal2,
      vvalue_decimal_3: value.intValueDecimal3,
      istate_record: value.intState,
      iuser_token: 1
    };

    this.loadingSaveDetail  = true;
    this.saveOrEditTableDetail(false, data);
  }

  editTableDetail(item: any) {
    let data: any = {
      ...item,
      iid_table_headboard: this.lsTableDetailDto.iid_table_headboard
    };

    this.loadingEditDetail  = true;
    this.saveOrEditTableDetail(true, data);
  }

  deleteTableDetail(event: any, item: any) {
    
    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
    
        this.httpCoreService.delete(Endpoints.DeleteTableDetail+item.iid_table_detail).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.loadDataTableDetail(item.iid_table_headboard);

          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })
    
      },
      reject: () => { }
    });
  }

  changePageTableDetail(event: any) {
    this.reqDetail.iindex = event.first;
    this.reqDetail.ilimit = event.rows;
    this.firstDetail = event.first;
    this.loadDataTableDetail(this.reqDetail.iid_table_headboard);
  }

  hideModalDetail(){
    this.reqDetail.iindex = 0;
    this.reqDetail.ilimit = 5;
    this.vmEditRegisterTableDetail = false;
  }
//#endregion

  loadStateCB(){
    this.httpCoreService.getDataCb(this.paramTDState).subscribe(res => {
      if(res.isSuccess){
        this.lstState = res.data;
      }
    })
  }


  getSecurity(){
    const permisos =this.utilService.getSeguridad(this.router.url);
    
    this.bUpdateAccess = permisos.baccess_update;
    this.bDeleteAccess = permisos.baccess_delete;
    this.bCreateAccess = permisos.baccess_create;  
  }

}
