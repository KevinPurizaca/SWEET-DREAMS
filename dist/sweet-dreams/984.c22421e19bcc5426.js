"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[984],{984:(P,l,s)=>{s.r(l),s.d(l,{UserComunitysModule:()=>G});var p=s(1368),a=s(332),u=s(2024),m=s(6876),d=s(1012),c=s(5732),t=s(2116),C=s(1792),g=s(5352),y=s(7564),h=s(5592),f=s(2392),v=s(3312);function O(n,r){1&n&&(t.I0R(0,"tr")(1,"th",7),t.OEk(2,"Id"),t.C$Y(),t.I0R(3,"th",8),t.OEk(4,"Nombres"),t.C$Y(),t.I0R(5,"th",9),t.OEk(6,"Apellidos"),t.C$Y(),t.I0R(7,"th",10),t.OEk(8,"Perfil"),t.C$Y(),t.I0R(9,"th",11),t.OEk(10,"Rango"),t.C$Y(),t.I0R(11,"th",12),t.OEk(12,"Comunidad"),t.C$Y(),t.I0R(13,"th",13),t.OEk(14,"Nro. Telefonico"),t.C$Y(),t.I0R(15,"th",14),t.OEk(16,"Canal"),t.C$Y(),t.I0R(17,"th",15),t.OEk(18,"Link Canal"),t.C$Y(),t.I0R(19,"th",16),t.OEk(20,"Estado"),t.C$Y(),t.I0R(21,"th",17),t.OEk(22,"Acciones"),t.C$Y()())}function R(n,r){if(1&n&&(t.I0R(0,"tr")(1,"td",18),t.OEk(2),t.C$Y(),t.I0R(3,"td",8),t.OEk(4),t.C$Y(),t.I0R(5,"td",9),t.OEk(6),t.C$Y(),t.I0R(7,"td",10),t.OEk(8),t.C$Y(),t.I0R(9,"td",11),t.OEk(10),t.C$Y(),t.I0R(11,"td",12),t.OEk(12),t.C$Y(),t.I0R(13,"td",13),t.OEk(14),t.C$Y(),t.I0R(15,"td",14),t.OEk(16),t.C$Y(),t.I0R(17,"td",15)(18,"a",19),t.OEk(19),t.C$Y()(),t.I0R(20,"td",16),t.OEk(21),t.C$Y(),t.wR5(22,"td",17),t.C$Y()),2&n){const e=r.$implicit;t.yG2(2),t.cNF(e.vcode),t.yG2(2),t.cNF(e.vfirst_name),t.yG2(2),t.cNF(e.vlast_name),t.yG2(2),t.cNF(e.vname_profile),t.yG2(2),t.cNF(e.vrange_member),t.yG2(2),t.cNF(e.vname_comunity),t.yG2(2),t.cNF(e.vphone),t.yG2(2),t.cNF(e.vchannel_twitch),t.yG2(2),t.E7m("href",e.vurl_channel_twitch,t.K6U),t.yG2(),t.cNF(e.vurl_channel_twitch),t.yG2(2),t.cNF(e.vstate_record)}}function I(n,r){1&n&&(t.I0R(0,"tr")(1,"td",20),t.OEk(2,"No se encontr\xf3 Informaci\xf3n."),t.C$Y()())}function E(n,r){1&n&&(t.I0R(0,"tr")(1,"td",20),t.OEk(2," Cargando informaci\xf3n. Espere por favor. "),t.C$Y()())}let Y=(()=>{class n{constructor(e,i,o,w,k){this.route=e,this.router=i,this.httpCoreService=o,this.commonService=w,this.utilService=k,this.name="",this.lstUsers=[],this.req={iid_user:-1,vcode:"",vfirst_name:"",vlast_name:"",vemail:"",inumber_document:-1,itype_document:-1,iphone:-1,vaddress:"",iid_department:-1,iid_profile:-1,iid_comunity:-1,istate_record:-1,iindex:0,ilimit:m.AN},this.totalRecord=0,this.first=0,this.rowsDefault=m.AN,this.rowsOptions=m.WA}ngOnInit(){this.route.params.subscribe(e=>{this.name=e.name,this.getSeguridad()})}loadData(e){this.httpCoreService.post(e,u.U.GetListUsers).subscribe(i=>{i.isSuccess&&(this.lstUsers=i.data,this.totalRecord=i.iTotal_record)})}getSeguridad(){const e=this.router.url.split("/"),i=[e[1],"/",e[2],"/",this.name].join(""),o=this.utilService.getOptionGroupComunity(i);this.req.iid_comunity=o.iid_comunity,this.loadData(this.req)}static#t=this.\u0275fac=function(i){return new(i||n)(t.GI1(a.gV),t.GI1(a.E5),t.GI1(C.c),t.GI1(g.G),t.GI1(d.e))};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-user-comunitys"]],standalone:!0,features:[t.M5G([d.e]),t.UHJ],decls:8,vars:8,consts:[["header","Tabla de Usuarios",1,"line-height-3",3,"toggleable"],["scrollDirection","both","scrollHeight","400px","styleClass","mt-3","responsiveLayout","scroll","styleClass","p-datatable-gridlines",3,"value","scrollable"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["currentPageReportTemplate","Total : {totalRecords} registros",3,"rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","first"],[1,"td-id"],[1,"td-name"],[1,"td-firstname"],[1,"td-profile"],[1,"td-range"],[1,"td-comunity"],[1,"td-phone"],[1,"td-channel"],[1,"td-url-channel"],[1,"td-state"],["pFrozenColumn","","alignFrozen","right",1,"td-actions"],[1,"font-bold"],["target","_blank",3,"href"],["colspan","7"]],template:function(i,o){1&i&&(t.wR5(0,"br"),t.I0R(1,"p-panel",0)(2,"p-table",1),t.yuY(3,O,23,0,"ng-template",2)(4,R,23,11,"ng-template",3)(5,I,3,0,"ng-template",4)(6,E,3,0,"ng-template",5),t.C$Y(),t.wR5(7,"p-paginator",6),t.C$Y()),2&i&&(t.yG2(),t.E7m("toggleable",!1),t.yG2(),t.E7m("value",o.lstUsers)("scrollable",!0),t.yG2(5),t.E7m("rows",o.req.ilimit)("totalRecords",o.totalRecord)("rowsPerPageOptions",o.rowsOptions)("showCurrentPageReport",!0)("first",o.first))},dependencies:[c.k,y.U3,h.oJ,h._E,f.s,v._],styles:[".td-id[_ngcontent-%COMP%]{min-width:8rem;max-width:8rem}.td-name[_ngcontent-%COMP%], .td-firstname[_ngcontent-%COMP%]{min-width:12rem;max-width:12rem}.td-profile[_ngcontent-%COMP%]{min-width:15rem;max-width:15rem}.td-range[_ngcontent-%COMP%], .td-comunity[_ngcontent-%COMP%]{min-width:12rem;max-width:12rem}.td-phone[_ngcontent-%COMP%]{min-width:15rem;max-width:15rem}.td-channel[_ngcontent-%COMP%]{min-width:10rem;max-width:10rem}.td-url-channel[_ngcontent-%COMP%]{min-width:20rem;max-width:20rem}.td-state[_ngcontent-%COMP%], .td-actions[_ngcontent-%COMP%]{min-width:8rem;max-width:8rem}"]})}return n})(),$=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.a4G({type:n});static#n=this.\u0275inj=t.s3X({imports:[a.qQ.forChild([{path:"",component:Y}]),a.qQ]})}return n})(),G=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.a4G({type:n});static#n=this.\u0275inj=t.s3X({imports:[p.MD,c.k,$]})}return n})()}}]);