"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9756],{9756:(C,s,l)=>{l.r(s),l.d(s,{ChartsDemoModule:()=>h});var d=l(1368),n=l(4280),u=l(4680),t=l(2116),c=l(116),p=l(7572);let g=(()=>{class o{constructor(r){this.layoutService=r,this.subscription=this.layoutService.configUpdate$.pipe((0,u.o)(25)).subscribe(e=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const r=getComputedStyle(document.documentElement),e=r.getPropertyValue("--text-color"),a=r.getPropertyValue("--text-color-secondary"),i=r.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:r.getPropertyValue("--primary-500"),borderColor:r.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:r.getPropertyValue("--primary-200"),borderColor:r.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:i,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[r.getPropertyValue("--indigo-500"),r.getPropertyValue("--purple-500"),r.getPropertyValue("--teal-500")],hoverBackgroundColor:[r.getPropertyValue("--indigo-400"),r.getPropertyValue("--purple-400"),r.getPropertyValue("--teal-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:e}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:r.getPropertyValue("--primary-500"),borderColor:r.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:r.getPropertyValue("--primary-200"),borderColor:r.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:a},grid:{color:i,drawBorder:!1}},y:{ticks:{color:a},grid:{color:i,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[r.getPropertyValue("--indigo-500"),r.getPropertyValue("--purple-500"),r.getPropertyValue("--teal-500"),r.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:e}}},scales:{r:{grid:{color:i}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:r.getPropertyValue("--indigo-400"),pointBackgroundColor:r.getPropertyValue("--indigo-400"),pointBorderColor:r.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:r.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:r.getPropertyValue("--purple-400"),pointBackgroundColor:r.getPropertyValue("--purple-400"),pointBorderColor:r.getPropertyValue("--purple-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:r.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{r:{grid:{color:a}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||o)(t.GI1(c.O))};static#r=this.\u0275cmp=t.In1({type:o,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(e,a){1&e&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t.OEk(4,"Linear Chart"),t.C$Y(),t.wR5(5,"p-chart",3),t.C$Y(),t.I0R(6,"div",4)(7,"h5",5),t.OEk(8,"Pie Chart"),t.C$Y(),t.wR5(9,"p-chart",6),t.C$Y(),t.I0R(10,"div",4)(11,"h5",5),t.OEk(12,"Polar Area Chart"),t.C$Y(),t.wR5(13,"p-chart",7),t.C$Y()(),t.I0R(14,"div",1)(15,"div",2)(16,"h5"),t.OEk(17,"Bar Chart"),t.C$Y(),t.wR5(18,"p-chart",8),t.C$Y(),t.I0R(19,"div",4)(20,"h5",5),t.OEk(21,"Doughnut Chart"),t.C$Y(),t.wR5(22,"p-chart",9),t.C$Y(),t.I0R(23,"div",4)(24,"h5",5),t.OEk(25,"Radar Chart"),t.C$Y(),t.wR5(26,"p-chart",10),t.C$Y()()()),2&e&&(t.yG2(5),t.E7m("data",a.lineData)("options",a.lineOptions),t.yG2(4),t.E7m("data",a.pieData)("options",a.pieOptions),t.yG2(4),t.E7m("data",a.polarData)("options",a.polarOptions),t.yG2(5),t.E7m("data",a.barData)("options",a.barOptions),t.yG2(4),t.E7m("data",a.pieData)("options",a.pieOptions),t.yG2(4),t.E7m("data",a.radarData)("options",a.radarOptions))},dependencies:[p.a],encapsulation:2})}return o})(),y=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#r=this.\u0275mod=t.a4G({type:o});static#a=this.\u0275inj=t.s3X({imports:[n.qQ.forChild([{path:"",component:g}]),n.qQ]})}return o})(),h=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#r=this.\u0275mod=t.a4G({type:o});static#a=this.\u0275inj=t.s3X({imports:[d.MD,y,p.g]})}return o})()}}]);