import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR, PATTERNS, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-ranges',
  standalone: true,
  imports: [SharedModule,InputMaskModule,PipesModule],
  templateUrl: './ranges.component.html',
  styleUrl: './ranges.component.scss'
})
export class RangesComponent  implements OnInit {
  patternTime :string = PATTERNS.Time;

  formSearch: FormGroup;
  formRegisterEdit: FormGroup;

  lstRange: any[] = [];
  lsRangeDto!: any;


  submitted: boolean = false;
  titleEditRegisterRange: string = '';
  vmEditRegisterRange: boolean = false;
  totalRecord: number = 0;
  first: number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstState: ComboModel[] = [];
  paramTDState = PARAMS_AUXILIAR.STATES;

  req = {
    iid_range: -1,
    vname_range: '',
    vdescription_range: '',

    istate_record: -1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }
  constructor(
    fs: FormBuilder,
    frep: FormBuilder,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
  ) {
    this.formSearch = fs.group({
      txtName: [''],
      txtDescription: [''],
      intState: [1]
    });
    this.formRegisterEdit= frep.group({
      txtName: ['', [Validators.required]],
      txtDescription: ['', [Validators.required]],
      intState: [1, [Validators.required]],
      txtTimeAgenda: ['', [Validators.required]],
      intHoursNormal: [null],
      intHoursVip: [null],
      intMinRange: [null],


    });
  }
  
  ngOnInit(): void {
    this.loadStateCB();    
    this.loadData(this.req);
  }


  viewModal(type: number, item: any) {
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    this.formRegisterEdit.reset();
    switch (type) {
      case 1:
        this.lsRangeDto = {};
        this.lsRangeDto.iid_range = 0;
        this.titleEditRegisterRange = "Registrar Rango";
        this.vmEditRegisterRange = true;

        break;
      case 2:
        this.lsRangeDto = item;
        this.titleEditRegisterRange = "Editar Rango";
        this.vmEditRegisterRange = true;
        break;
    }
  }

  loadData(req: any) {
    this.lstRange = [];
    this.httpCoreService.post(req, Endpoints.GetListRange).subscribe(res => {

      if (res.isSuccess) {
        this.lstRange = res.data;
        this.totalRecord = res.iTotal_record;
      }
    })
  }



  saveRange(){
    this.submitted = true;

    let value = this.formRegisterEdit.value;
    for (let c in this.formRegisterEdit.controls) {
      this.formRegisterEdit.controls[c].markAsTouched();
    }
    if (this.formRegisterEdit.valid) {

      let req = {
        iid_range: this.lsRangeDto.iid_range ,
        vname_range: value.txtName,
        vdescription_range: value.txtDescription,
        ihours_normal_range: value.intHoursNormal,
        ihours_vip_range: value.intHoursVip,
        vtime_agenda_range: value.txtTimeAgenda,
        dsupport_min_required: value.intMinRange,
        istate_record: value.intState       
      }

      this.httpCoreService.post(req, Endpoints.RegisterRange).subscribe(res => {
        if (res.isSuccess) {
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.loadData(this.req);
          this.hideModal();
        }
      }
      )
    }
  }

  deleteRange(event: any, item: any) {

    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {

        this.httpCoreService.delete(Endpoints.DeleteRange + item.iid_range).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.loadData(this.req);
          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })

      },
      reject: () => { }
    });
  }
  changePage(event: any) {
    this.req.iindex = event.first;
    this.req.ilimit = event.rows;
    this.first = event.first;
    this.loadData(this.req);
  }

  hideModal(){
    this.vmEditRegisterRange = false;
    this.submitted = false;
    this.titleEditRegisterRange = '';
  }

  loadStateCB() {
    this.httpCoreService.getDataCb(this.paramTDState).subscribe(res => {
      if (res.isSuccess) {
        this.lstState = res.data;
      }
    })
  }

}
