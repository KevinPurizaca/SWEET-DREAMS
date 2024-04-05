import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { S } from '@fullcalendar/core/internal-common';
import { ConfirmationService } from 'primeng/api';
import { interval, map } from 'rxjs';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
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

  iidUser:number = 5;
  lsUser:any = {};
  lsRange:any = {};

  lsShedule:any []= [];
  fechaActual: Date;
  formAgenda: FormGroup;

  positionDay:number = 1;


  vMessageEmpty: string = MESSAGE_EMPTY;
  vMessageSelect: string = MESSAGE_SELECT;

  lstDiaAgenda: ComboModel[] = [];
  paramTDiaAgenda = PARAMS_AUXILIAR.DIA_AGENDA;

  description_user = "";
  descriptionSemana:string = "";
  numberSemana:number = 0;

  lstTypeSream : ComboModel[] = [];
  paramTDTypeSream : string = PARAMS_AUXILIAR.TYPE_STREAM;

  lstHourStream : ComboModel[] = [];
  paramTDHourSream : string = PARAMS_AUXILIAR.ZONAS_HORARIOS;

  lstMonth : ComboModel[] = [];
  paramTDMonth : string = PARAMS_AUXILIAR.MESES_ANIO;


  horaActual: string;
  vactive_agenda : boolean = false;

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
      this.loadDataUser();
      // this.loadDataTypeStream();
      this.loadDataMonth();

      this.fechaActual = new Date();
      this.currentWeek = this.getWeekNumber(this.fechaActual, 0); // Aumenta 7 días
      let hora_dia = this.obtenerDiaYHora(0);
      console.log("hora_dia:", hora_dia)

      this. loadDataDiaAgenda();

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
      }
    }
    )
  }

  loadDataUser(){
    let req = {
      iid_user: this.iidUser,
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
      ilimit: 1000,
    }

    this.httpCoreService.post(req, Endpoints.GetListUsers).subscribe(res => {

      if (res.isSuccess) {
        this.lsUser =res.data[0];
        console.log("this.lsUser:", this.lsUser)
        this.description_user = this.lsUser.vfirst_name + ' || Rango '+ this.lsUser.vrange_member + ' || Zona Horaria: '+ this.lsUser.vtime_zone ;
        this.loadDataRange();
        this.loadDataTypeStream();
        this.loadDataHourStream();       

      }
    });
  }

  
  loadDataRange(){

    let req = {
      iid_range: this.lsUser.iid_range_member,
      vname_range: '',
      vdescription_range: '',
  
      istate_record: -1,
      iindex: 0,
      ilimit: 10
    }

    this.httpCoreService.post(req, Endpoints.GetListRange).subscribe(res => {
      if (res.isSuccess) {
        this.lsRange = res.data[0];
      }
    })
  }

  loadDataSheduleByUser(){
    let req = {
      iid_range: this.lsUser.iid_range_member,
      vname_range: '',
      vdescription_range: '',
  
      istate_record: -1,
      iindex: 0,
      ilimit: 10
    }

    this.lsShedule = [];
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
      iid_user: this.iidUser,
      istate_record: 1,
    }
    console.log("req:", req)
    this.httpCoreService.post(req, Endpoints.RegisterShedule).subscribe(res => {
      if (res.isSuccess) {
        this.loadDataSheduleByUser();
      }
    })

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
  

  
  loadDataDiaAgenda() {
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDiaAgenda).subscribe(res => {
      if (res.isSuccess) {
        this.lstDiaAgenda = res.data.filter((x:any)=> x.id > this.positionDay );
      }
    });
  }


  loadDataTypeStream(){    
    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDTypeSream).subscribe(res => {
      if (res.isSuccess) {

        if(this.lsRange.ihours_vip_range != 0 && this.lsRange.ihours_normal_range != 0){
          this.lstTypeSream = res.data;
        }
        else if(this.lsRange.ihours_normal_range == 0 ){
          this.lstTypeSream = res.data.filter((x:any)=> x.id != 2);//solo agendara VIP
        }
        else{
          this.lstTypeSream = res.data.filter((x:any)=> x.id != 1);//solo agendara normal        
        }       
      }
    });
  }

  loadDataHourStream(){    

    this.httpCoreService.get(Endpoints.GetListTableDetailCB + this.paramTDHourSream).subscribe(res => {
      if (res.isSuccess) {
        const zone_horaria:any = res.data.find((x:any) => x.id === this.lsUser.iid_time_zone);
        this.lstHourStream = this.generateHoursRange(zone_horaria.ivalue1, zone_horaria.ivalue2,zone_horaria.vvalue3);
      }
    });
  }

  
  generateHoursRange(start: number, end: number,name_zone:string): ComboModel[] {

    const hoursRange: ComboModel[] = [];
    for (let i = 0; i < 14; i++) {
      let inicio = start + i;
      if(inicio == 23){       
        start = -1 - i;      
      }     
      let item ={
        id:i,
        vvalue1 :`${inicio< 10 ? '0' + inicio : inicio}:00   | HORA ${name_zone}`
      }

      hoursRange.push(item);
    }
    return hoursRange;
  }


  validarAperturaAgenda(hour:any):boolean{
    const parts : number [] = hour.split(':');
    const parts_range :  number [] = this.lsRange.vtime_agenda_range.split(':');

    if(parts[0] >= parts_range[0] && parts[1] >= parts_range[1]){      
      return true;
    }
    return false;
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
