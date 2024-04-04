import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { MAX_LENGTH_FILES, PARAMS_AUXILIAR, PATTERNS, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-comunitys',
  standalone: true,
  imports: [SharedModule, ImageModule, ProgressBarModule, PipesModule,InputMaskModule],
  templateUrl: './comunitys.component.html',
  styleUrl: './comunitys.component.scss'
})
export class ComunitysComponent implements OnInit {

  hora: string = ''; // variable para almacenar la hora ingresada por el usuario
  paqtqtern :string = PATTERNS.Time;

  formSearch: FormGroup;
  formRegisterEdit: FormGroup;

  lstComunitys: any[] = [];
  lsComunityDto!: any;

  uploadedFiles: any[] = [];

  totalRecord: number = 0;
  first: number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstState: ComboModel[] = [];
  paramTDState = PARAMS_AUXILIAR.STATES;

  editImagen:boolean = false;

  req = {
    iid_comunity: -1,
    vname_comunity: '',
    vdescription_comunity: '',
    istate_record: -1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }

  titleEditRegisterComunity: string = '';
  vmEditRegisterComunity: boolean = false;
  submitted: boolean = false;

  imagenURL: string;

  constructor(
    fs: FormBuilder,
    fre: FormBuilder,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
  ) {
    this.formSearch = fs.group({
      txtName: [''],
      txtDescription: [''],
      intState: [1]
    });
    this.formRegisterEdit = fre.group({
      txtName: ['', [Validators.required]],
      txtDescription: ['', [Validators.required]],
      intState: [1, [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.loadStateCB();
    this.loadData(this.req);
  }

  loadData(req: any) {
    this.lstComunitys = [];
    this.httpCoreService.post(req, Endpoints.GetListComunity).subscribe(res => {
      if (res.isSuccess) {
        this.lstComunitys = res.data;
        this.totalRecord = res.iTotal_record;
      }
    }
    )
  }

  viewModal(type: number, item: any): void {
    this.uploadedFiles = [];
    this.lsComunityDto = {};
    this.imagenURL = null;    
    this.formRegisterEdit.reset();

    switch (type) {
      case 1:
        this.titleEditRegisterComunity = 'Crear Comunidad';
        this.lsComunityDto.iid_comunity = 0;
        this.vmEditRegisterComunity = true;

        break;
      case 2:
        this.titleEditRegisterComunity = 'Editar Comunidad';
        this.lsComunityDto = item;
        this.vmEditRegisterComunity = true;
        break;
    }
  }



  loadStateCB() {
    this.httpCoreService.getDataCb(this.paramTDState).subscribe(res => {
      if (res.isSuccess) {
        this.lstState = res.data;
      }
    })
  }

  saveComunity() {
    this.submitted = true;

    let value = this.formRegisterEdit.value;
    for (let c in this.formRegisterEdit.controls) {
      this.formRegisterEdit.controls[c].markAsTouched();
    }
    if (this.formRegisterEdit.valid) {
      let req = {
        iid_comunity: this.lsComunityDto.iid_comunity,
        vname_comunity: value.txtName,
        vdescription_comunity: value.txtDescription,
        istate_record: value.intState,
        iuser_token: 1
      }

      const formData = new FormData();
      formData.append("data", JSON.stringify(req));
      this.uploadedFiles.forEach((archivo: File, index: number) => {
        formData.append(`file`, archivo);
      });

      this.httpCoreService.postFromData(Endpoints.RegisterComunity, formData).subscribe(res => {
        if (res.isSuccess) {
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.loadData(this.req);
          this.vmEditRegisterComunity = false;

        }
        else {
          this.commonService.HanddleErrorMessage(res);
        }

      })
    }
  }

  agregarArchivo(event: any) {
    const fileList: FileList | null = event.target.files;
    let item: any = {
      vdescripcion_archivo_nombre: '',
    }
    if (fileList && fileList.length > 0) {
      this.editImagen = true;

      const file: File = fileList[0];

      if (file.name.length >= MAX_LENGTH_FILES) {
        this.commonService.HanddleErrorMessage('El Nombre del Archivo es muy grande.');
        return;
      }

      this.uploadedFiles = [];
      this.imagenURL = URL.createObjectURL(file);

      item.vdescripcion_archivo_nombre = file.name;
      this.uploadedFiles.push(file);
    } else {
      // this.commonService.HanddleErrorMessage(MSG_WARNINGS.MSG_ARCHIVO_PDF);
      return;
    }
  }


  deleteComunity(event: any, item: any) {

    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {

        this.httpCoreService.delete(Endpoints.DeleteComunity + item.iid_comunity).subscribe(res => {
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

  hideModal() {
    this.editImagen = false;
    this.uploadedFiles = [];
    this.lsComunityDto = {};
    this.vmEditRegisterComunity = false;
  }
}
