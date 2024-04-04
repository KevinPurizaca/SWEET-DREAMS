import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent implements OnInit {

  formSearch: FormGroup;
  formRegisterEditProfile: FormGroup;

  lstProfiles: any[] = [];
  lsProfilesDto!: any;

  lstOptionsModule: any[] = [];

  submitted: boolean = false;
  isUserMember: boolean = false;

  titleEditRegisterProfile: string = '';
  vmEditRegisterProfile: boolean = false;
  totalRecord: number = 0;
  first: number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstState: ComboModel[] = [];
  paramTDState = PARAMS_AUXILIAR.STATES;

  req = {
    iid_profile: -1,
    vname_profile: '',
    vdescription_profile: '',

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
    this.formRegisterEditProfile = frep.group({
      txtName: ['', [Validators.required]],
      txtDescription: ['', [Validators.required]],
      intState: [1, [Validators.required]],
      boolUserMember: [false]

    });
  }

  ngOnInit(): void {
    this.loadStateCB();
    this.loadData(this.req);
  }

  viewModal(type: number, item: any) {
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    this.lstOptionsModule = [];

    switch (type) {
      case 1:
        this.loadOptionsByModule();
        this.lsProfilesDto = {};
        this.lsProfilesDto.iid_profile = 0;
        this.lsProfilesDto.buser_member = false;
        this.titleEditRegisterProfile = "Registrar Perfil";
        this.vmEditRegisterProfile = true;

        break;
      case 2:
        this.loadOptionsByProfile(item.iid_profile);
        this.lsProfilesDto = item;
        this.lsProfilesDto.buser_member = item.buser_member || false;

        this.titleEditRegisterProfile = "Editar Tabla Cabecera";
        this.vmEditRegisterProfile = true;
        break;
    }
  }


  loadData(req: any) {
    this.lstProfiles = [];
    this.httpCoreService.post(req, Endpoints.GetListProfile).subscribe(res => {

      if (res.isSuccess) {
        this.lstProfiles = res.data;
        this.totalRecord = res.iTotal_record;
      }
    })
  }

  changePage(event: any) {
    this.req.iindex = event.first;
    this.req.ilimit = event.rows;
    this.first = event.first;
    this.loadData(this.req);
  }



  loadOptionsByModule() {
    let req = {
      iid_option: -1,
      iid_module: -1,
      vname_module: "",
      vname_option: "",
      vdescription_module: "",
      vdescription_option: "",
      istate_record: 1,
      iindex: 0,
      ilimit: 100,

    }
    this.httpCoreService.post(req, Endpoints.GetListOptionsByModulo).subscribe(res => {
      if (res.isSuccess) {
        this.lstOptionsModule = res.data;
      }
    })
  }

  loadOptionsByProfile(iid_profile: number) {

    this.httpCoreService.get(Endpoints.GetListProfileAccessByProfile + iid_profile).subscribe(res => {
      if (res.isSuccess) {
        this.lstOptionsModule = res.data;
      }
    })
  }


  saveProfile() {
    this.submitted = true;

    let value = this.formRegisterEditProfile.value;
    for (let c in this.formRegisterEditProfile.controls) {
      this.formRegisterEditProfile.controls[c].markAsTouched();
    }
    if (this.formRegisterEditProfile.valid) {

      let options: any[] = this.lstOptionsModule.map((x: any) => ({
        iid_profile_access: x.iid_profile_access || 0,
        iid_module: x.iid_module,
        iid_option: x.iid_option,
        iid_profile: x.iid_profile,
        baccess_view: !!x.baccess_view,
        baccess_create: !!x.baccess_create,
        baccess_update: !!x.baccess_update,
        baccess_delete: !!x.baccess_delete,
      }));


      let req = {
        iid_profile: this.lsProfilesDto.iid_profile,
        vname_profile: value.txtName || '',
        vdescription_profile: value.txtDescription || '',
        istate_record: value.intState,
        buser_member:value.boolUserMember,
        lstOptions: options,
      }
      this.httpCoreService.post(req, Endpoints.RegisterProfileOption).subscribe(res => {
        if (res.isSuccess) {
          this.loadData(this.req);
          this.vmEditRegisterProfile = false;
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
        } else {
          this.commonService.HanddleErrorMessage(res.message);
        }
      })
    }
  }

  deleteProfile(event: any, item: any) {

    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {

        this.httpCoreService.delete(Endpoints.DeleteProfile + item.iid_profile).subscribe(res => {
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




  loadStateCB() {
    this.httpCoreService.getDataCb(this.paramTDState).subscribe(res => {
      if (res.isSuccess) {
        this.lstState = res.data;
      }
    })
  }
  selectCheckAll(select: any, colum: any, event: any) {
    select.forEach(function (value: any) {
      switch (colum) {
        case 1:
          value.baccess_view = event.checked; break;
        case 2:
          value.baccess_create = event.checked; break;
        case 3:
          value.baccess_update = event.checked; break;
        case 4:
          value.baccess_delete = event.checked; break;
      }
    });
  }

  selectCheckAllModule(lista: any, idModule: any, colum: any, event: any) {
    lista.filter((x: any) => x.iid_module == idModule).forEach((value: any) => {
      switch (colum) {
        case 1:
          value.baccess_view = event.checked; break;
        case 2:
          value.baccess_create = event.checked; break;
        case 3:
          value.baccess_update = event.checked; break;
        case 4:
          value.baccess_delete = event.checked; break;
      }
    });
  }

  selectCheck(select: any, colum: any, event: any) {
    switch (colum) {
      case 1:
        select.baccess_view = event.checked; break;
      case 2:
        select.baccess_create = event.checked; break;
      case 3:
        select.baccess_update = event.checked; break;
      case 4:
        select.baccess_delete = event.checked; break;
    }
  }
}
