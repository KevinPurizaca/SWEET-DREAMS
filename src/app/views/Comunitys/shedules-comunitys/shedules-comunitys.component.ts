import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { S } from '@fullcalendar/core/internal-common';
import { ConfirmationService } from 'primeng/api';
import { interval, map } from 'rxjs';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { UtilService } from 'src/app/core/util/util.services';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-shedules-comunitys',
  standalone: true,
  imports: [SharedModule],
  providers:[UtilService],
  templateUrl: './shedules-comunitys.component.html',
  styleUrl: './shedules-comunitys.component.scss'
})
export class ShedulesComunitysComponent implements OnInit {
  nameComunity: string = '';

  lsComunity:any = {};
  lsUser:any = {};

  lstShedule:any []= [];

  fechaActual: Date;
  formAgenda: FormGroup;

  positionDay:number = 1;


  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstDiaAgenda: ComboModel[] = [];
  lstHourStream : ComboModel[] = [];
  lstTypeSream : ComboModel[] = [];
  lstMonth : ComboModel[] = [];


  paramTDTypeSream : string = PARAMS_AUXILIAR.TYPE_STREAM;
  paramTDMonth : string = PARAMS_AUXILIAR.MESES_ANIO;



  descriptionSemana:string = "";
  numberSemana:number = 0;

  horaActual: string;
  vactive_agenda : boolean = false;
  sheduleAvailable: boolean = false;
  
  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
    private utilService: UtilService,
    fs: FormBuilder,

    ) { 

      this.formAgenda = fs.group({
        intDay: [-1],
        intHour: [-1],
        intTypeStream: [-1],
      });
    }


    currentWeek: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nameComunity = params['name'];

      this.loadDataComunity();
      this.lsUser = this.utilService.getItemStorage('userdata'); 
  

      this.loadDataMonth();
      this.loadDataTypeStream();


      this.fechaActual = new Date();
      this.currentWeek = this.getWeekNumber(this.fechaActual, 0); // Aumenta 7 días
      let hora_dia = this.obtenerDiaYHora(0);

      // this.loadDataDiaAgenda();

      interval(1000).pipe(
        map(() => {
          const fechaActual = new Date();
          return fechaActual.toLocaleTimeString('en-US', {hour12: false});
        })
      ).subscribe(hora => {
        this.horaActual = hora;
        this.vactive_agenda = this.validarAperturaAgenda(hora);
      });
      
    });
  }


  loadDataShedule(){
    let req ={
      iid_week_shedule_weekly : this.currentWeek,
      iid_comunity : this.lsComunity.iid_comunity
    }
    this.httpCoreService.post(req,Endpoints.GetListSheduleByWeek).subscribe(res => {
      if (res.isSuccess) {
        this.lstShedule = res.data;    
        this.sheduleAvailable = res.sheduleAvailable;    
        this.lstTypeSream = res.vipAvailable ? this.lstTypeSream : this.lstTypeSream.filter(x => x.id != 2);
      }  
    })
  }

  loadDataComunity(){
    const parts: string[] = this.router.url.split('/');
    const url = [parts[1],'/',parts[2],'/' ,this.nameComunity].join('');
    const permisos =this.utilService.getOptionGroupComunity(url);

    let req = {
      iid_comunity: permisos.iid_comunity,
      vname_comunity: '',
      vdescription_comunity: '',
      istate_record: -1,
      iindex: 0,
      ilimit: 1000
    }
  
    this.httpCoreService.post(req, Endpoints.GetListComunity).subscribe(res => {
      if (res.isSuccess) {
        this.lsComunity = res.data[0];
        this.loadDataShedule();
        this.loadDataDiaAgenda();        
      }
    }
    )
  }

  
 saveShedule(){
    let value = this.formAgenda.value;

    let req = {
      iid_shedule_weekly: 0,
      vname_shedule_weekly:'Semana Nro. ' + this.numberSemana,
      vdescription_shedule_weekly:this.descriptionSemana ,
      iid_day_shedule_weekly: value.intDay,
      vhour_shedule_weekly: value.intHour.substring(0,5),
      itype_stream: value.intTypeStream,
      iid_week_shedule_weekly:this.numberSemana,
      iid_user: this.lsUser.iid_user,
      iid_comunity: this.lsComunity.iid_comunity,
      istate_record: 1,
    }
    this.httpCoreService.post(req, Endpoints.RegisterShedule).subscribe(res => {
      console.log("res:", res)
      if (res.isSuccess) {
        this.loadDataDiaAgenda();        
        this.loadDataShedule();
        this.lstHourStream = [];
        this.formAgenda.reset();
        this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_AGENDA_REGISTRADA);
      }
      else{
        this.commonService.HanddleErrorMessage(res);

      }
    })

  }



  //#region  CARGA CBS

  loadDataDiaAgenda() {
    let req ={
      iid_week_shedule_weekly : this.currentWeek,
      iid_comunity : this.lsComunity.iid_comunity
    }
    this.httpCoreService.post(req,Endpoints.GetListDayAvailableByWeek).subscribe(res => {
      if (res.isSuccess) {
        this.lstDiaAgenda = res.data;
      }
    });
  }

  loadDataTypeStream(){    
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDTypeSream).subscribe(res => {
      if (res.isSuccess) {
        if(this.lsUser.ihours_vip_range_user != 0 && this.lsUser.ihours_normal_range_user != 0){
          this.lstTypeSream = res.data;
        }
        else if(this.lsUser.ihours_normal_range_user == 0 ){
          this.lstTypeSream = res.data.filter((x:any)=> x.id != 1);//solo agendara VIP
        }
        else{
          this.lstTypeSream = res.data.filter((x:any)=> x.id != 2);//solo agendara normal        
        }       
      }
    });
  }

  loadDataHourStream(){  
    let value = this.formAgenda.value;

    let req ={
      iid_week_shedule_weekly : this.currentWeek,
      iid_comunity : this.lsComunity.iid_comunity,
      iid_day_shedule_weekly :value.intDay,
    }  
    this.lstHourStream = [];

    this.httpCoreService.post(req,Endpoints.GetListHourAvailableByDay).subscribe(res => {
      if (res.isSuccess) {
         this.lstHourStream = res.data ;
      }
    });  
  } 

//#endregion

  validarAperturaAgenda(hour:any):boolean{
    const parts : number [] = hour.split(':');
    const parts_range :  number [] = this.lsUser.vtime_agenda_range_user.split(':');

    if(parts[0] >= parts_range[0] && parts[1] >= parts_range[1]){      
      return true;
    }
    return false;
  }



  getWeekNumber(date: Date, daysToAdd: number): number {
    const tempDate: any = new Date(date);
    tempDate.setDate(tempDate.getDate() + daysToAdd); // Aumenta la fecha según la cantidad de días
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7));  
    const startOfYear: any = new Date(tempDate.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((tempDate - startOfYear) / 86400000 + 1) / 7);

    this.numberSemana = weekNumber + (tempDate.getDay() === 0 ? 1 : 0);//si es domingo le suma uno para poderagendar en la siguienqte semana caso conqtrario 
    return this.numberSemana ;                                       //agendara lo de esa semana
                                                          
  }
  
  obtenerDiaYHora(daysToAdd: number): string {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
    const fechaActual = new Date();
    const diaMes = fechaActual.getDate() + daysToAdd ; // Obtiene el día del mes
    const diaSemana = diasSemana[(diaMes - 1) % 7] ; // Calcula el día de la semana según el día del mes
    this.positionDay = (diaMes % 7) - 1; // Calcula la posición del día en el array

    this.descriptionSemana = `${diaSemana}  ${diaMes} de [mes] de la Semana Nro. ${this.numberSemana}`; 

    return  `Hoy es ${diaSemana} ${diaMes}  posicion ${this.positionDay} del array`;
  }
  

  loadDataMonth(){
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDMonth).subscribe(res => {
      if (res.isSuccess) {
        this.lstMonth = res.data;

        let month_name:any =  this.lstMonth.find((x:any) => x.id == new Date().getMonth() + 1).vvalue1;//fechaActual.getMonth() ;//this.lstMonth;
        
        this.descriptionSemana = this.descriptionSemana.replace('[mes]', month_name);
      }
    });
  }


  
}
