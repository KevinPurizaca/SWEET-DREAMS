import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR, PATTERNS, ROWS_DEFAULT, ROWS_OPTIONS, TimeZone } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { UtilService } from 'src/app/core/util/util.services';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  formSearch: FormGroup;
  formRegisterEdit: FormGroup;

  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstProfile: ComboModel[] = [];
  lstStatus: ComboModel[] = [];
  lstRangeUser: ComboModel[] = [];
  lstComunityUser: ComboModel[] = [];

  lstZonaHoraria: ComboModel[] = [];
  lstTipeDocument: ComboModel[] = [];

  paramTDState = PARAMS_AUXILIAR.STATES;
  paramTDRangeUser = PARAMS_AUXILIAR.TYPE_STREAM;
  paramTDZoneHoraria = PARAMS_AUXILIAR.ZONAS_HORARIOS;


  lstUsers: any[] = [];

  lsUserDto!: any;

  titleEditRegisterUser: string = '';


  vmEditRegisterUser: boolean = false;
  submitted: boolean = false;
  isUserMember: boolean = false;

  totalRecord: number = 0;
  first: number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  loadingData :boolean = false;
  loadingSave:boolean = false;

  bUpdateAccess :boolean = false;
  bDeleteAccess :boolean = false;
  bCreateAccess :boolean = false;
  bSystemCreator :boolean = false;
  
  req = {
    iid_user: -1,
    vcode: "",
    vfirst_name: "",
    vlast_name: "",
    vemail: "",
    inumber_document: -1,
    itype_document: -1,
    iphone: -1,
    vaddress: "",
    iid_department: -1,
    iid_profile: -1,
    iid_comunity: -1,
    istate_record: -1,
    iindex: 0,
    ilimit: ROWS_DEFAULT,
  }

  constructor(
    fs: FormBuilder,
    fre: FormBuilder,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
    private utilService: UtilService,
    private router: Router,


  ) {
    this.formSearch = fs.group({
      txtFirstName: ['', [Validators.pattern(PATTERNS.Letras)]],
      txtLastName: ['', [Validators.pattern(PATTERNS.Letras)]],
      intProfile: [-1],
      intStatus: [-1],
      txtPhoneNumber: [null, [Validators.pattern(PATTERNS.Numeros)]],
      txtEmail: [''],
      intDepartment: [-1],
      txtDocumentNumber: [null, [Validators.pattern(PATTERNS.Numeros)]],
    });

    this.formRegisterEdit = fre.group({
      txtFirstName: ['', [Validators.required]],
      txtLastName: ['',/*[Validators.pattern(PATTERNS.Letras), Validators.required]*/],
      intProfile: [-1],
      intRangeUser: [-1],
      intStatus: [-1],
      intComunity: [-1],
      intTimeZone: [-1],

      txtPhoneNumber: [null, [Validators.required]],
      // txtEmail:['',[Validators.pattern(PATTERNS.Email), Validators.required]],
      // intDepartment:[-1],
      // txtDocumentNumber:[null,[Validators.pattern(PATTERNS.Numeros), Validators.required]],
      // intTipeDocument:[-1],
      txtIdTwitch: ['', [Validators.required]],
      txtLinkTwitch: ['', [Validators.required]],


    });     

  }

  ngOnInit(): void {
    this.loadDataProfile();
    this.loadDataStatus();
    this.loadDataZonaHoraria();
    this.loadDataRangeUser();
    this.loadDataComunityUser();

    this.loadData(this.req);
    this.getSecurity();
  }


  viewModal(type: number, item: any) {
    switch (type) {
      case 1:
        this.formRegisterEdit.markAsUntouched();
        this.formRegisterEdit.reset();
        this.lsUserDto = {};
        this.lsUserDto.iid_user = 0;
        this.titleEditRegisterUser = "Registrar Usuario"
        this.vmEditRegisterUser = true;
        break;
      case 2:
        this.titleEditRegisterUser = "Editar Usuario"
        this.lsUserDto = item;
        this.vmEditRegisterUser = true;
        break;
    }
  }

  saveUser() {
    this.submitted = true;

    let value = this.formRegisterEdit.value;
    for (let c in this.formRegisterEdit.controls) {
      this.formRegisterEdit.controls[c].markAsTouched();
    }

    if (this.formRegisterEdit.valid) {

      this.loadingSave = true;
      let req = {
        iid_user: this.lsUserDto.iid_user,
        vfirst_name: value.txtFirstName,
        vlast_name: value.txtLastName,
        vphone: value.txtPhoneNumber,
        iid_profile: value.intProfile,
        iid_range_member: value.intRangeUser,
        vurl_channel_twitch: value.txtLinkTwitch,
        vchannel_twitch: value.txtIdTwitch,
        iid_comunity: value.intComunity,
        istate_record: value.intStatus,
        iid_time_zone:value.intTimeZone
      }

      this.httpCoreService.post(req, Endpoints.RegisterUser).subscribe(res => {
        if (res.isSuccess) {
          this.loadData(this.req);
          this.vmEditRegisterUser = false;
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
        }
        else {
          this.commonService.HanddleErrorMessage(res);
        }
        this.loadingSave = false;
      })


    }
  }

  loadData(req: any) {
    this.loadingData = true;
    this.lstUsers = [];

    this.httpCoreService.post(req, Endpoints.GetListUsers).subscribe(res => {
      if (res.isSuccess) {
        this.lstUsers = res.data;
        this.totalRecord = res.iTotal_record;
      }
      this.loadingData = false;
    });
  }

  onSelectProfile(event): void {
    this.isUserMember = this.lstProfile.find((x: any) => x.id == event.value).bvalue1;
  }


  loadDataProfile() {
    let req = {
      iid_profile: -1,
      vcode: "",
      vdescription: "",
      istate_record: -1,
      iindex: 0,
      ilimit: 10000,
    }
    this.httpCoreService.post(req, Endpoints.GetListProfile).subscribe(res => {
      if (res.isSuccess) {
        const userdata = this.utilService.getItemStorage('userdata');

        this.lstProfile = res.data.map((x: any) => {
          return {
            id: x.iid_profile,
            vvalue1: x.vname_profile,
            bvalue1: x.buser_member,
          }
        });

        if(userdata.iid_profile_user != 1){
          this.lstProfile = this.lstProfile.filter( (p:any) => p.id != 1)
        }



      }
    });
  }

  loadDataStatus() {
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDState).subscribe(res => {
      if (res.isSuccess) {
        this.lstStatus = res.data;
      }
    });
  }

  loadDataZonaHoraria() {
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDZoneHoraria).subscribe(res => {
      if (res.isSuccess) {
        this.lstZonaHoraria = res.data;
      }
    });
  }
  
  loadDataRangeUser() {
    let req = {
      iid_Range: -1,
      vname_Range: '',
      vdescription_Range: '',
  
      istate_record: -1,
      iindex: 0,
      ilimit: 10000
    }

    this.httpCoreService.post(req,Endpoints.GetListRange).subscribe(res => {
      if (res.isSuccess) {
        this.lstRangeUser = res.data.map((x: any) => {
          return {
            id: x.iid_range,
            vvalue1: x.vname_range
          }
        });;
      }
    });
  }

  loadDataComunityUser() {
    let req = {
      iid_comunity: -1,
      vname_comunity: '',
      vdescription_comunity: '',
      istate_record: -1,
      iindex: 0,
      ilimit: 1000
    }

    this.httpCoreService.post(req,Endpoints.GetListComunity).subscribe(res => {
      if (res.isSuccess) {
        this.lstComunityUser = res.data.map((x: any) => {
          return {
            id: x.iid_comunity,
            vvalue1: x.vname_comunity
          }
        });
      }
    });
  }

  changePage(event: any) {
    this.req.iindex = event.first;
    this.req.ilimit = event.rows;
    this.first = event.first;
    this.loadData(this.req);
  }

  getSecurity(){
    const permisos =this.utilService.getSeguridad(this.router.url);
    const userdata = this.utilService.getItemStorage('userdata');
    
    this.bUpdateAccess = permisos.baccess_update;
    this.bDeleteAccess = permisos.baccess_delete;
    this.bCreateAccess = permisos.baccess_create;  
    this.bSystemCreator = userdata.iid_profile_user ==1 ?true:false;  

    
  }

}
