"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[6632],{6632:(C,r,o)=>{o.r(r),o.d(r,{UtilitiesModule:()=>I});var p=o(1368),a=o(4280),i=o(2116),m=o(6040),l=o(2736);function u(e,f){if(1&e&&(i.I0R(0,"div",11),i.wR5(1,"i"),i.I0R(2,"div"),i.OEk(3),i.C$Y()()),2&e){const t=f.$implicit;i.yG2(),i.uQ9("text-2xl pi pi-",t.properties.name,""),i.yG2(2),i.oRS("pi-",t.properties.name,"")}}let h=(()=>{class e{constructor(t){this.iconService=t,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(t=>{let n=t=t.filter(s=>-1===s.icon.tags.indexOf("deprecate"));n.sort((s,c)=>s.properties.name<c.properties.name?-1:s.properties.name<c.properties.name?1:0),this.icons=n,this.filteredIcons=t})}onFilter(t){const n=t.target.value;this.filteredIcons=n?this.icons.filter(s=>s.icon.tags[0].includes(n)):this.icons}static#i=this.\u0275fac=function(n){return new(n||e)(i.GI1(m.I))};static#e=this.\u0275cmp=i.In1({type:e,selectors:[["ng-component"]],decls:59,vars:1,consts:[[1,"card"],[1,"app-code"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(n,s){1&n&&(i.I0R(0,"div",0)(1,"h2"),i.OEk(2,"Icons"),i.C$Y(),i.I0R(3,"h4"),i.OEk(4,"Download"),i.C$Y(),i.I0R(5,"pre",1)(6,"code"),i.OEk(7,"npm install primeicons --save"),i.C$Y()(),i.I0R(8,"h4"),i.OEk(9,"Getting Started"),i.C$Y(),i.I0R(10,"p"),i.OEk(11,"PrimeIcons use the "),i.I0R(12,"strong"),i.OEk(13,"pi pi-{icon}"),i.C$Y(),i.OEk(14," syntax such as "),i.I0R(15,"strong"),i.OEk(16,"pi pi-check"),i.C$Y(),i.OEk(17,". A standalone icon can be displayed using an element such as "),i.I0R(18,"i"),i.OEk(19,"i"),i.C$Y(),i.OEk(20," or "),i.I0R(21,"i"),i.OEk(22,"span"),i.C$Y()(),i.I0R(23,"pre",1)(24,"code"),i.OEk(25,'<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>'),i.C$Y()(),i.wR5(26,"i",2)(27,"i",3),i.I0R(28,"h4"),i.OEk(29,"Size"),i.C$Y(),i.I0R(30,"p"),i.OEk(31,"Size of the icons can easily be changed using font-size property."),i.C$Y(),i.I0R(32,"pre",1)(33,"code"),i.OEk(34,'<i class="pi pi-check"></i>'),i.C$Y()(),i.wR5(35,"i",4),i.I0R(36,"pre",1)(37,"code"),i.OEk(38,'<i class="pi pi-check" style="font-size: 2rem"></i>'),i.C$Y()(),i.wR5(39,"i",5),i.I0R(40,"h4"),i.OEk(41,"Spinning Animation"),i.C$Y(),i.I0R(42,"p"),i.OEk(43,"Special pi-spin class applies infinite rotate to an icon."),i.C$Y(),i.I0R(44,"pre",1)(45,"code"),i.OEk(46,'<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>'),i.C$Y()(),i.wR5(47,"i",6),i.I0R(48,"h4"),i.OEk(49,"List of Icons"),i.C$Y(),i.I0R(50,"p"),i.OEk(51,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),i.I0R(52,"a",7),i.OEk(53,"request new icons"),i.C$Y(),i.OEk(54," at the issue tracker."),i.C$Y(),i.I0R(55,"div")(56,"input",8),i.qCj("input",function(k){return s.onFilter(k)}),i.C$Y()(),i.I0R(57,"div",9),i.yuY(58,u,4,4,"div",10),i.C$Y()()),2&n&&(i.yG2(58),i.E7m("ngForOf",s.filteredIcons))},dependencies:[p.ay,l.C],encapsulation:2})}return e})(),d=(()=>{class e{static#i=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=i.a4G({type:e});static#t=this.\u0275inj=i.s3X({imports:[a.qQ.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:h},{path:"**",redirectTo:"/notfound"}]),a.qQ]})}return e})(),I=(()=>{class e{static#i=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=i.a4G({type:e});static#t=this.\u0275inj=i.s3X({imports:[p.MD,d,l.s]})}return e})()}}]);