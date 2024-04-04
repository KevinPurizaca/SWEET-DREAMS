import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endpoints } from 'src/app/core/config/endpoints';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { UtilService } from 'src/app/core/util/util.services';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-user-comunitys',
  standalone: true,
  imports: [SharedModule],
  providers:[UtilService],
  templateUrl: './user-comunitys.component.html',
  styleUrl: './user-comunitys.component.scss'
})
export class UserComunitysComponent implements OnInit {
  name: string = '';
  lstUsers: any[] = [];

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
  
  totalRecord: number = 0;
  first: number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  constructor(
            private route: ActivatedRoute,
            private router: Router,
            private httpCoreService: HttpCoreService,
            private commonService: CommonService,
            private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.getSeguridad();

    });
  }





  loadData(req: any) {
    this.httpCoreService.post(req, Endpoints.GetListUsers).subscribe(res => {

      if (res.isSuccess) {
        this.lstUsers = res.data;
        this.totalRecord = res.iTotal_record;
      }
    });
  }

  getSeguridad(){
    const url = this.router.url
    const parts: string[] = url.split('/');

    const url2 = ['/',parts[1],'/',parts[2],'/' ,this.name].join('');

    const permisos =this.utilService.getSeguridad(url2);
    this.req.iid_comunity = permisos.iid_comunity;
    this.loadData(this.req);
    // console.log("permisos:", permisos)
    // this.intCrear    = permisos.iacceso_crear;
    // this.intEditar   = permisos.iacceso_actualizar;
    // this.intEliminar = permisos.iacceso_eliminar;
  }
}
