"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[116],{1116:(Xe,v,l)=>{l.r(v),l.d(v,{DashboardModule:()=>We});var u=l(1368),k=l(4716),x=l(9952),y=l(6480),_=l(5592),b=l(232),S=l(1288),e=l(2116),g=l(332),f=l(7564),T=l(2672),w=l(7068),O=l(2452),M=l(552),C=l(3340);let De=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=e.a4G({type:i});static \u0275inj=e.s3X({imports:[u.MD,g.qQ,C.a,f.kT,T.e,w.o,O.w,M.Q,g.qQ,C.a,f.kT]})}return i})();var Ae=l(868),He=l(5448),Le=l(7773),Ye=l(9175),Ve=l(116);function Ke(i,o){1&i&&(e.I0R(0,"tr")(1,"th"),e.OEk(2,"Image"),e.C$Y(),e.I0R(3,"th",62),e.OEk(4,"Name "),e.wR5(5,"p-sortIcon",63),e.C$Y(),e.I0R(6,"th",64),e.OEk(7,"Price "),e.wR5(8,"p-sortIcon",65),e.C$Y(),e.I0R(9,"th"),e.OEk(10,"View"),e.C$Y()())}function Ue(i,o){if(1&i&&(e.I0R(0,"tr")(1,"td",66),e.wR5(2,"img",67),e.C$Y(),e.I0R(3,"td",68),e.OEk(4),e.C$Y(),e.I0R(5,"td",69),e.OEk(6),e.wVc(7,"currency"),e.C$Y(),e.I0R(8,"td",70),e.wR5(9,"button",71),e.C$Y()()),2&i){const n=o.$implicit;e.yG2(2),e.CI5("src","assets/demo/images/product/",n.image,"",e.K6U),e._6D("alt",n.name),e.yG2(2),e.cNF(n.name),e.yG2(2),e.cNF(e.g7$(7,4,n.price,"USD"))}}const I=()=>({width:"2.5rem",height:"2.5rem"}),d=()=>({height:"8px"}),Ne=()=>({width:"50%"}),je=()=>({width:"16%"}),qe=()=>({width:"67%"}),Ge=()=>({width:"35%"}),Qe=()=>({width:"75%"}),Be=()=>({width:"40%"});let ze=(()=>{class i{constructor(n,t){this.productService=n,this.layoutService=t,this.subscription=this.layoutService.configUpdate$.pipe(function Fe(i,o=Ae.M){return(0,He.i)((n,t)=>{let a=null,s=null,r=null;const c=()=>{if(a){a.unsubscribe(),a=null;const p=s;s=null,t.next(p)}};function m(){const p=r+i,h=o.now();if(h<p)return a=this.schedule(void 0,p-h),void t.add(a);c()}n.subscribe((0,Le.e)(t,p=>{s=p,r=o.now(),a||(a=o.schedule(m,i),t.add(a))},()=>{c(),t.complete()},void 0,()=>{s=a=null}))})}(25)).subscribe(a=>{this.initChart()})}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(n=>this.products=n),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const n=getComputedStyle(document.documentElement),t=n.getPropertyValue("--text-color"),a=n.getPropertyValue("--text-color-secondary"),s=n.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:n.getPropertyValue("--bluegray-700"),borderColor:n.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:n.getPropertyValue("--green-600"),borderColor:n.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:a},grid:{color:s,drawBorder:!1}},y:{ticks:{color:a},grid:{color:s,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(t){return new(t||i)(e.GI1(Ye.Q),e.GI1(Ve.O))};static#t=this.\u0275cmp=e.In1({type:i,selectors:[["ng-component"]],decls:191,vars:41,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"col-12","xl:col-6"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-between","align-items-center","mb-5"],["pButton","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"],[3,"popup","model"],["menu",""],[1,"list-none","p-0","m-0"],[1,"flex","flex-column","md:flex-row","md:align-items-center","md:justify-content-between","mb-4"],[1,"text-900","font-medium","mr-2","mb-1","md:mb-0"],[1,"mt-1","text-600"],[1,"mt-2","md:mt-0","flex","align-items-center"],[1,"surface-300","border-round","overflow-hidden","w-10rem","lg:w-6rem",3,"ngStyle"],[1,"bg-orange-500","h-full",3,"ngStyle"],[1,"text-orange-500","ml-3","font-medium"],[1,"mt-2","md:mt-0","ml-0","md:ml-8","flex","align-items-center"],[1,"bg-cyan-500","h-full",3,"ngStyle"],[1,"text-cyan-500","ml-3","font-medium"],[1,"bg-pink-500","h-full",3,"ngStyle"],[1,"text-pink-500","ml-3","font-medium"],[1,"bg-green-500","h-full",3,"ngStyle"],[1,"text-green-500","ml-3","font-medium"],[1,"bg-purple-500","h-full",3,"ngStyle"],[1,"text-purple-500","ml-3","font-medium"],[1,"bg-teal-500","h-full",3,"ngStyle"],[1,"text-teal-500","ml-3","font-medium"],["type","line",3,"data","options"],[1,"flex","align-items-center","justify-content-between","mb-4"],[1,"block","text-600","font-medium","mb-3"],[1,"p-0","mx-0","mt-0","mb-4","list-none"],[1,"flex","align-items-center","py-2","border-bottom-1","surface-border"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-blue-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-dollar","text-xl","text-blue-500"],[1,"text-900","line-height-3"],[1,"text-700"],[1,"text-blue-500"],[1,"flex","align-items-center","py-2"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-orange-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-download","text-xl","text-orange-500"],[1,"text-700","line-height-3"],[1,"text-blue-500","font-medium"],[1,"p-0","m-0","list-none"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-pink-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-question","text-xl","text-pink-500"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],[2,"width","15%","min-width","5rem"],["width","50",1,"shadow-4",3,"src","alt"],[2,"width","35%","min-width","7rem"],[2,"width","35%","min-width","8rem"],[2,"width","15%"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button","p-component","p-button-text","p-button-icon-only"]],template:function(t,a){if(1&t){const s=e.KQA();e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),e.OEk(6,"Orders"),e.C$Y(),e.I0R(7,"div",5),e.OEk(8,"152"),e.C$Y()(),e.I0R(9,"div",6),e.wR5(10,"i",7),e.C$Y()(),e.I0R(11,"span",8),e.OEk(12,"24 new "),e.C$Y(),e.I0R(13,"span",9),e.OEk(14,"since last visit"),e.C$Y()()(),e.I0R(15,"div",1)(16,"div",2)(17,"div",3)(18,"div")(19,"span",4),e.OEk(20,"Revenue"),e.C$Y(),e.I0R(21,"div",5),e.OEk(22,"$2.100"),e.C$Y()(),e.I0R(23,"div",10),e.wR5(24,"i",11),e.C$Y()(),e.I0R(25,"span",8),e.OEk(26,"%52+ "),e.C$Y(),e.I0R(27,"span",9),e.OEk(28,"since last week"),e.C$Y()()(),e.I0R(29,"div",1)(30,"div",2)(31,"div",3)(32,"div")(33,"span",4),e.OEk(34,"Customers"),e.C$Y(),e.I0R(35,"div",5),e.OEk(36,"28441"),e.C$Y()(),e.I0R(37,"div",12),e.wR5(38,"i",13),e.C$Y()(),e.I0R(39,"span",8),e.OEk(40,"520 "),e.C$Y(),e.I0R(41,"span",9),e.OEk(42,"newly registered"),e.C$Y()()(),e.I0R(43,"div",1)(44,"div",2)(45,"div",3)(46,"div")(47,"span",4),e.OEk(48,"Comments"),e.C$Y(),e.I0R(49,"div",5),e.OEk(50,"152 Unread"),e.C$Y()(),e.I0R(51,"div",14),e.wR5(52,"i",15),e.C$Y()(),e.I0R(53,"span",8),e.OEk(54,"85 "),e.C$Y(),e.I0R(55,"span",9),e.OEk(56,"responded"),e.C$Y()()(),e.I0R(57,"div",16)(58,"div",17)(59,"h5"),e.OEk(60,"Recent Sales"),e.C$Y(),e.I0R(61,"p-table",18),e.yuY(62,Ke,11,0,"ng-template",19)(63,Ue,10,7,"ng-template",20),e.C$Y()(),e.I0R(64,"div",17)(65,"div",21)(66,"h5"),e.OEk(67,"Best Selling Products"),e.C$Y(),e.I0R(68,"div")(69,"button",22),e.qCj("click",function(c){e.usT(s);const m=e.Gew(71);return e.CGJ(m.toggle(c))}),e.C$Y(),e.wR5(70,"p-menu",23,24),e.C$Y()(),e.I0R(72,"ul",25)(73,"li",26)(74,"div")(75,"span",27),e.OEk(76,"Space T-Shirt"),e.C$Y(),e.I0R(77,"div",28),e.OEk(78,"Clothing"),e.C$Y()(),e.I0R(79,"div",29)(80,"div",30),e.wR5(81,"div",31),e.C$Y(),e.I0R(82,"span",32),e.OEk(83,"%50"),e.C$Y()()(),e.I0R(84,"li",26)(85,"div")(86,"span",27),e.OEk(87,"Portal Sticker"),e.C$Y(),e.I0R(88,"div",28),e.OEk(89,"Accessories"),e.C$Y()(),e.I0R(90,"div",33)(91,"div",30),e.wR5(92,"div",34),e.C$Y(),e.I0R(93,"span",35),e.OEk(94,"%16"),e.C$Y()()(),e.I0R(95,"li",26)(96,"div")(97,"span",27),e.OEk(98,"Supernova Sticker"),e.C$Y(),e.I0R(99,"div",28),e.OEk(100,"Accessories"),e.C$Y()(),e.I0R(101,"div",33)(102,"div",30),e.wR5(103,"div",36),e.C$Y(),e.I0R(104,"span",37),e.OEk(105,"%67"),e.C$Y()()(),e.I0R(106,"li",26)(107,"div")(108,"span",27),e.OEk(109,"Wonders Notebook"),e.C$Y(),e.I0R(110,"div",28),e.OEk(111,"Office"),e.C$Y()(),e.I0R(112,"div",33)(113,"div",30),e.wR5(114,"div",38),e.C$Y(),e.I0R(115,"span",39),e.OEk(116,"%35"),e.C$Y()()(),e.I0R(117,"li",26)(118,"div")(119,"span",27),e.OEk(120,"Mat Black Case"),e.C$Y(),e.I0R(121,"div",28),e.OEk(122,"Accessories"),e.C$Y()(),e.I0R(123,"div",33)(124,"div",30),e.wR5(125,"div",40),e.C$Y(),e.I0R(126,"span",41),e.OEk(127,"%75"),e.C$Y()()(),e.I0R(128,"li",26)(129,"div")(130,"span",27),e.OEk(131,"Robots T-Shirt"),e.C$Y(),e.I0R(132,"div",28),e.OEk(133,"Clothing"),e.C$Y()(),e.I0R(134,"div",33)(135,"div",30),e.wR5(136,"div",42),e.C$Y(),e.I0R(137,"span",43),e.OEk(138,"%40"),e.C$Y()()()()()(),e.I0R(139,"div",16)(140,"div",17)(141,"h5"),e.OEk(142,"Sales Overview"),e.C$Y(),e.wR5(143,"p-chart",44),e.C$Y(),e.I0R(144,"div",17)(145,"div",45)(146,"h5"),e.OEk(147,"Notifications"),e.C$Y(),e.I0R(148,"div")(149,"button",22),e.qCj("click",function(c){e.usT(s);const m=e.Gew(71);return e.CGJ(m.toggle(c))}),e.C$Y(),e.wR5(150,"p-menu",23,24),e.C$Y()(),e.I0R(152,"span",46),e.OEk(153,"TODAY"),e.C$Y(),e.I0R(154,"ul",47)(155,"li",48)(156,"div",49),e.wR5(157,"i",50),e.C$Y(),e.I0R(158,"span",51),e.OEk(159,"Richard Jones "),e.I0R(160,"span",52),e.OEk(161," has purchased a blue t-shirt for "),e.I0R(162,"span",53),e.OEk(163,"79$"),e.C$Y()()()(),e.I0R(164,"li",54)(165,"div",55),e.wR5(166,"i",56),e.C$Y(),e.I0R(167,"span",57),e.OEk(168,"Your request for withdrawal of "),e.I0R(169,"span",58),e.OEk(170,"2500$"),e.C$Y(),e.OEk(171," has been initiated."),e.C$Y()()(),e.I0R(172,"span",46),e.OEk(173,"YESTERDAY"),e.C$Y(),e.I0R(174,"ul",59)(175,"li",48)(176,"div",49),e.wR5(177,"i",50),e.C$Y(),e.I0R(178,"span",51),e.OEk(179,"Keyser Wick "),e.I0R(180,"span",52),e.OEk(181," has purchased a black jacket for "),e.I0R(182,"span",53),e.OEk(183,"59$"),e.C$Y()()()(),e.I0R(184,"li",48)(185,"div",60),e.wR5(186,"i",61),e.C$Y(),e.I0R(187,"span",51),e.OEk(188,"Jane Davis"),e.I0R(189,"span",52),e.OEk(190," has posted a new questions about your product."),e.C$Y()()()()()()()}2&t&&(e.yG2(9),e.E7m("ngStyle",e.q4q(25,I)),e.yG2(14),e.E7m("ngStyle",e.q4q(26,I)),e.yG2(14),e.E7m("ngStyle",e.q4q(27,I)),e.yG2(14),e.E7m("ngStyle",e.q4q(28,I)),e.yG2(10),e.E7m("value",a.products)("paginator",!0)("rows",5),e.yG2(9),e.E7m("popup",!0)("model",a.items),e.yG2(10),e.E7m("ngStyle",e.q4q(29,d)),e.yG2(),e.E7m("ngStyle",e.q4q(30,Ne)),e.yG2(10),e.E7m("ngStyle",e.q4q(31,d)),e.yG2(),e.E7m("ngStyle",e.q4q(32,je)),e.yG2(10),e.E7m("ngStyle",e.q4q(33,d)),e.yG2(),e.E7m("ngStyle",e.q4q(34,qe)),e.yG2(10),e.E7m("ngStyle",e.q4q(35,d)),e.yG2(),e.E7m("ngStyle",e.q4q(36,Ge)),e.yG2(10),e.E7m("ngStyle",e.q4q(37,d)),e.yG2(),e.E7m("ngStyle",e.q4q(38,Qe)),e.yG2(10),e.E7m("ngStyle",e.q4q(39,d)),e.yG2(),e.E7m("ngStyle",e.q4q(40,Be)),e.yG2(7),e.E7m("data",a.chartData)("options",a.chartOptions),e.yG2(7),e.E7m("popup",!0)("model",a.items))},dependencies:[u.Qt,x.a,y.iS,_.oJ,f.U3,_.E5,_.q4,b.A9,u.cf],encapsulation:2})}return i})(),Je=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=e.a4G({type:i});static#n=this.\u0275inj=e.s3X({imports:[g.qQ.forChild([{path:"",component:ze}]),g.qQ]})}return i})(),We=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=e.a4G({type:i});static#n=this.\u0275inj=e.s3X({imports:[u.MD,k.y,x.g,y.mk,_.q0,S.E,De,b.GS,Je]})}return i})()}}]);