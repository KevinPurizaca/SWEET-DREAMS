"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[1924],{1924:(R,c,l)=>{l.r(c),l.d(c,{PortafolioClientModule:()=>I});var p=l(1368),r=l(4280),m=l(9280),e=l(2116),d=l(116),u=l(232),g=l(1288),h=l(1980);function f(i,s){if(1&i&&(e.I0R(0,"div",49)(1,"div",50)(2,"div",51)(3,"div",52),e.wR5(4,"i"),e.C$Y(),e.I0R(5,"h5",53),e.OEk(6),e.C$Y(),e.I0R(7,"span",37),e.OEk(8),e.C$Y()()()()),2&i){const t=s.$implicit;e.yG2(3),e.m8U("flex align-items-center justify-content-center mb-3 "+t.colorIcon),e.yG2(),e.m8U(t.icon+" text-2xl "+t.colorFondoIcon),e.yG2(2),e.cNF(t.title),e.yG2(2),e.cNF(t.subtitle)}}function b(i,s){if(1&i&&(e.I0R(0,"div")(1,"div",54),e.wR5(2,"img",55),e.C$Y(),e.I0R(3,"div")(4,"div",56),e.wR5(5,"i"),e.C$Y(),e.I0R(6,"h2",57),e.OEk(7),e.C$Y(),e.I0R(8,"span",58),e.OEk(9),e.C$Y()()()),2&i){const t=s.$implicit;e.m8U(t.divPrincipal),e.yG2(),e.m8U("flex-order-1 col-12 lg:col-6 p-0 "+t.divImagen),e.yG2(),e.E7m("src",t.urlImagen,e.K6U),e.yG2(),e.m8U("col-12 lg:col-6 my-auto flex flex-column text-center "+t.divPrincipalIcono),e.yG2(),e.m8U("flex align-items-center justify-content-center align-self-center "+t.divIcono),e.yG2(),e.m8U(t.icono+" text-5xl"),e.yG2(2),e.cNF(t.title),e.yG2(2),e.cNF(t.subtitle)}}let x=(()=>{class i{constructor(t,o){this.layoutService=t,this.router=o,this.nameUser="Kevin Steiner Purizaca Pazo",this.job="Desarrollador Front-End.",this.lstHabilidades=[{id:"1",title:"Easy to Use",subtitle:"Posuere morbi leo urna molestie.",icon:"pi pi-fw pi-users",colorFondoIcon:"text-yellow-700",colorIcon:"bg-yellow-200"},{id:"2",title:"Fresh Design",subtitle:"Semper risus in hendrerit.",icon:"pi pi-fw pi-palette",colorFondoIcon:"text-cyan-700",colorIcon:"bg-cyan-200"},{id:"3",title:"Well Documented",subtitle:"Non arcu risus quis varius quam quisque.",icon:"pi pi-fw pi-map",colorFondoIcon:"text-indigo-700",colorIcon:"bg-indigo-200"},{id:"4",title:"Responsive Layout",subtitle:"Nulla malesuada pellentesque elit.",icon:"pi pi-fw pi-id-card",colorFondoIcon:"text-bluegray-700",colorIcon:" bg-bluegray-200"},{id:"5",title:"Clean Code",subtitle:"Condimentum lacinia quis vel eros.",icon:"pi pi-fw pi-star",colorFondoIcon:"text-orange-700",colorIcon:"bg-orange-200"},{id:"6",title:"Dark Mode",subtitle:"Convallis tellus id interdum velit laoreet.",icon:"pi pi-fw pi-moon",colorFondoIcon:"text-pink-700",colorIcon:"bg-pink-200"},{id:"7",title:"Ready to Use",subtitle:"Mauris sit amet massa vitae.",icon:"pi pi-fw pi-shopping-cart",colorFondoIcon:"text-teal-700",colorIcon:"bg-teal-200"},{id:"8",title:"Modern Practices",subtitle:"Elementum nibh tellus molestie nunc non.",icon:"pi pi-fw pi-globe",colorFondoIcon:"text-blue-700",colorIcon:"bg-blue-200"},{id:"9",title:"Privacy",subtitle:"Neque egestas congue quisque.",icon:"pi pi-fw pi-eye",colorFondoIcon:"text-purple-700",colorIcon:"bg-purple-200"}],this.lstProyectos=[{id:"1",title:"Congue Quisque Egestas",subtitle:"Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.",divPrincipal:"grid mt-8 pb-2 md:pb-2",divImagen:"flex justify-content-center bg-purple-100 lg:flex-order-0",divPrincipalIcono:"lg:text-right lg:align-items-end",divIcono:"bg-purple-200 lg:align-self-end",icono:"pi pi-fw pi-mobile text-purple-700",urlImagen:"assets/demo/images/landing/mockup.svg"},{id:"2",title:"Celerisque Eu Ultrices",subtitle:"Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.",divPrincipal:"grid my-8 pt-2 md:pt-2",divImagen:"flex justify-content-end sm:flex-order-2 bg-yellow-100",divPrincipalIcono:"lg:text-left lg:align-items-start",divIcono:"bg-yellow-200 lg:align-self-start",icono:"pi pi-fw pi-desktop text-yellow-700",urlImagen:"assets/demo/images/landing/mockup-desktop.svg"}],this.icon=""}ngOnInit(){let t=localStorage.getItem("theme_client")||"saga-blue";this.icon="saga-blue"===t?"pi pi-moon":"pi pi-sun",this.changeTheme(t,"saga-blue"===t?"arya-blue":"saga-blue")}changeThemeDarkLight(){let t=localStorage.getItem("theme_client")||"saga-blue";const o="saga-blue"===t?"dark":"light",n="saga-blue"===t?"arya-blue":"saga-blue";localStorage.setItem("theme_client",n),this.icon="saga-blue"===n?"pi pi-moon":"pi pi-sun",this.changeTheme(n,o)}set theme(t){this.layoutService.config.update(o=>({...o,theme:t}))}get theme(){return this.layoutService.config().theme}set colorScheme(t){this.layoutService.config.update(o=>({...o,colorScheme:t}))}get colorScheme(){return this.layoutService.config().colorScheme}changeTheme(t,o){this.theme=t,this.colorScheme=o}static#e=this.\u0275fac=function(o){return new(o||i)(e.GI1(d.O),e.GI1(r.E5))};static#t=this.\u0275cmp=e.In1({type:i,selectors:[["app-portafolio-client"]],standalone:!0,features:[e.UHJ],decls:144,vars:8,consts:[[1,"surface-0","flex","justify-content-center"],["id","home",1,"landing-wrapper","overflow-hidden"],[1,"py-4","px-4","mx-0","md:mx-6","lg:mx-8","lg:px-8","flex","align-items-center","justify-content-between","relative","lg:static","mb-3"],["href","#",1,"flex","align-items-center"],["alt","Sakai Logo","height","50",1,"mr-0","lg:mr-2",3,"src"],[1,"text-900","font-medium","text-2xl","line-height-3","mr-8"],["pRipple","","pStyleClass","@next","enterClass","hidden","leaveToClass","hidden",1,"cursor-pointer","block","lg:hidden","text-700",3,"hideOnOutsideClick"],[1,"pi","pi-bars","text-4xl"],[1,"align-items-center","surface-0","flex-grow-1","justify-content-between","hidden","lg:flex","absolute","lg:static","w-full","left-0","px-6","lg:px-0","z-2",2,"top","120px"],[1,"list-none","p-0","m-0","flex","lg:align-items-center","select-none","flex-column","lg:flex-row","cursor-pointer"],["pRipple","",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3",3,"click"],[1,"flex","justify-content-between","lg:block","border-top-1","lg:border-top-none","surface-border","py-3","lg:py-0","mt-3","lg:mt-0"],[1,"p-link",3,"click"],["id","hero",1,"flex","flex-column","pt-4","px-4","lg:px-8","overflow-hidden",2,"background","linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)","clip-path","ellipse(150% 87% at 93% 13%)"],[1,"mx-4","md:mx-8","mt-0","md:mt-4"],[1,"text-6xl","font-bold","text-gray-900","line-height-2"],[1,"font-light","block"],["pButton","","pRipple","","type","button","label","Get Started",1,"p-button-rounded","text-xl","border-none","mt-3","bg-blue-500","font-normal","line-height-3","px-3","text-white"],[1,"flex","justify-content-center","md:justify-content-end"],["src","assets/demo/images/landing/screen-1.png","alt","Hero Image",1,"w-9","md:w-auto"],["id","features",1,"py-4","px-4","lg:px-8","mt-5","mx-0","lg:mx-8"],[1,"grid","justify-content-center"],[1,"col-12","text-center","mt-8","mb-4"],[1,"text-900","font-normal","mb-2"],["class","col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0",4,"ngFor","ngForOf"],["id","proyects",1,"py-4","px-4","lg:px-8","mx-0","my-6","lg:mx-8"],[1,"text-center"],[3,"class",4,"ngFor","ngForOf"],["id","pricing",1,"py-4","px-4","lg:px-8","my-2","md:my-4"],[1,"text-600","text-2xl"],[1,"grid","justify-content-between","mt-8","md:mt-0"],[1,"col-12","lg:col-4","p-0","md:p-3"],[1,"p-3","flex","flex-column","border-200","pricing-card","cursor-pointer","border-2","hover:border-primary","transition-duration-300","transition-all",2,"border-radius","10px"],[1,"text-900","text-center","my-5"],["src","assets/demo/images/landing/free.svg","alt","free",1,"w-10","h-10","mx-auto"],[1,"my-5","text-center"],[1,"text-5xl","font-bold","mr-2","text-900"],[1,"text-600"],["pButton","","pRipple","","label","Get Started",1,"block","mx-auto","mt-4","p-button-rounded","border-none","ml-3","font-light","line-height-2","bg-blue-500","text-white"],[1,"w-full","bg-surface-200"],[1,"my-5","list-none","p-0","flex","text-900","flex-column"],[1,"py-2"],[1,"pi","pi-fw","pi-check","text-xl","text-cyan-500","mr-2"],[1,"text-xl","line-height-3"],[1,"col-12","lg:col-4","p-0","md:p-3","mt-4","md:mt-0"],["src","assets/demo/images/landing/startup.svg","alt","startup",1,"w-10","h-10","mx-auto"],["pButton","","pRipple","","label","Try Free",1,"block","mx-auto","mt-4","p-button-rounded","border-none","ml-3","font-light","line-height-2","bg-blue-500","text-white"],["src","assets/demo/images/landing/enterprise.svg","alt","enterprise",1,"w-10","h-10","mx-auto"],["pButton","","pRipple","","label","Get a Quote",1,"block","mx-auto","mt-4","p-button-rounded","border-none","ml-3","font-light","line-height-2","bg-blue-500","text-white"],[1,"col-12","md:col-12","lg:col-4","p-0","lg:pr-5","lg:pb-5","mt-4","lg:mt-0"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2))"],[1,"p-3","surface-card","h-full",2,"border-radius","8px"],[2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"mb-2","text-900"],[2,"border-radius","8px"],["alt","mockup mobile",1,"w-11",3,"src"],[2,"width","4.2rem","height","4.2rem","border-radius","10px"],[1,"line-height-1","text-900","text-4xl","font-normal"],[1,"text-700","text-2xl","line-height-3","ml-0","md:ml-2",2,"max-width","650px"]],template:function(o,n){1&o&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.wR5(4,"img",4),e.I0R(5,"span",5),e.OEk(6,"SAKAI"),e.C$Y()(),e.I0R(7,"a",6),e.wR5(8,"i",7),e.C$Y(),e.I0R(9,"div",8)(10,"ul",9)(11,"li")(12,"a",10),e.qCj("click",function(){return n.router.navigate(["/Client/Portafolio"],{fragment:"home"})}),e.I0R(13,"span"),e.OEk(14,"Home"),e.C$Y()()(),e.I0R(15,"li")(16,"a",10),e.qCj("click",function(){return n.router.navigate(["/Client/Portafolio"],{fragment:"features"})}),e.I0R(17,"span"),e.OEk(18,"Habilidades Tecnicas"),e.C$Y()()(),e.I0R(19,"li")(20,"a",10),e.qCj("click",function(){return n.router.navigate(["/Client/Portafolio"],{fragment:"proyects"})}),e.I0R(21,"span"),e.OEk(22,"Proyectos"),e.C$Y()()(),e.I0R(23,"li")(24,"a",10),e.qCj("click",function(){return n.router.navigate(["/Client/Portafolio"],{fragment:"pricing"})}),e.I0R(25,"span"),e.OEk(26,"Contacto"),e.C$Y()()()(),e.I0R(27,"div",11)(28,"button",12),e.qCj("click",function(){return n.changeThemeDarkLight()}),e.wR5(29,"i"),e.C$Y()()()(),e.I0R(30,"div",13)(31,"div",14)(32,"h1",15)(33,"span",16),e.OEk(34),e.C$Y(),e.OEk(35),e.C$Y(),e.wR5(36,"button",17),e.C$Y(),e.I0R(37,"div",18),e.wR5(38,"img",19),e.C$Y()(),e.I0R(39,"div",20)(40,"div",21)(41,"div",22)(42,"h2",23),e.OEk(43,"Habilidades Tecnicas"),e.C$Y()(),e.yuY(44,f,9,6,"div",24),e.C$Y()(),e.I0R(45,"div",25)(46,"div",26)(47,"h2",23),e.OEk(48,"Proyectos"),e.C$Y()(),e.yuY(49,b,10,13,"div",27),e.C$Y(),e.I0R(50,"div",28)(51,"div",26)(52,"h2",23),e.OEk(53,"Matchless Pricing"),e.C$Y(),e.I0R(54,"span",29),e.OEk(55,"Amet consectetur adipiscing elit..."),e.C$Y()(),e.I0R(56,"div",30)(57,"div",31)(58,"div",32)(59,"h3",33),e.OEk(60,"Free"),e.C$Y(),e.wR5(61,"img",34),e.I0R(62,"div",35)(63,"span",36),e.OEk(64,"$0"),e.C$Y(),e.I0R(65,"span",37),e.OEk(66,"per month"),e.C$Y(),e.wR5(67,"button",38),e.C$Y(),e.wR5(68,"p-divider",39),e.I0R(69,"ul",40)(70,"li",41),e.wR5(71,"i",42),e.I0R(72,"span",43),e.OEk(73,"Responsive Layout"),e.C$Y()(),e.I0R(74,"li",41),e.wR5(75,"i",42),e.I0R(76,"span",43),e.OEk(77,"Unlimited Push Messages"),e.C$Y()(),e.I0R(78,"li",41),e.wR5(79,"i",42),e.I0R(80,"span",43),e.OEk(81,"50 Support Ticket"),e.C$Y()(),e.I0R(82,"li",41),e.wR5(83,"i",42),e.I0R(84,"span",43),e.OEk(85,"Free Shipping"),e.C$Y()()()()(),e.I0R(86,"div",44)(87,"div",32)(88,"h3",33),e.OEk(89,"Startup"),e.C$Y(),e.wR5(90,"img",45),e.I0R(91,"div",35)(92,"span",36),e.OEk(93,"$1"),e.C$Y(),e.I0R(94,"span",37),e.OEk(95,"per month"),e.C$Y(),e.wR5(96,"button",46),e.C$Y(),e.wR5(97,"p-divider",39),e.I0R(98,"ul",40)(99,"li",41),e.wR5(100,"i",42),e.I0R(101,"span",43),e.OEk(102,"Responsive Layout"),e.C$Y()(),e.I0R(103,"li",41),e.wR5(104,"i",42),e.I0R(105,"span",43),e.OEk(106,"Unlimited Push Messages"),e.C$Y()(),e.I0R(107,"li",41),e.wR5(108,"i",42),e.I0R(109,"span",43),e.OEk(110,"50 Support Ticket"),e.C$Y()(),e.I0R(111,"li",41),e.wR5(112,"i",42),e.I0R(113,"span",43),e.OEk(114,"Free Shipping"),e.C$Y()()()()(),e.I0R(115,"div",44)(116,"div",32)(117,"h3",33),e.OEk(118,"Enterprise"),e.C$Y(),e.wR5(119,"img",47),e.I0R(120,"div",35)(121,"span",36),e.OEk(122,"$999"),e.C$Y(),e.I0R(123,"span",37),e.OEk(124,"per month"),e.C$Y(),e.wR5(125,"button",48),e.C$Y(),e.wR5(126,"p-divider",39),e.I0R(127,"ul",40)(128,"li",41),e.wR5(129,"i",42),e.I0R(130,"span",43),e.OEk(131,"Responsive Layout"),e.C$Y()(),e.I0R(132,"li",41),e.wR5(133,"i",42),e.I0R(134,"span",43),e.OEk(135,"Unlimited Push Messages"),e.C$Y()(),e.I0R(136,"li",41),e.wR5(137,"i",42),e.I0R(138,"span",43),e.OEk(139,"50 Support Ticket"),e.C$Y()(),e.I0R(140,"li",41),e.wR5(141,"i",42),e.I0R(142,"span",43),e.OEk(143,"Free Shipping"),e.C$Y()()()()()()()()()),2&o&&(e.yG2(4),e.CI5("src","assets/layout/images/","light"===n.layoutService.config().colorScheme?"logo-dark":"logo-white",".svg",e.K6U),e.yG2(3),e.E7m("hideOnOutsideClick",!0),e.yG2(22),e.m8U(n.icon),e.yG2(5),e.cNF(n.nameUser),e.yG2(),e.oRS(" ",n.job," "),e.yG2(9),e.E7m("ngForOf",n.lstHabilidades),e.yG2(5),e.E7m("ngForOf",n.lstProyectos))},dependencies:[m.k,p.ay,u.A9,g.u,h.c]})}return i})(),v=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.a4G({type:i});static#i=this.\u0275inj=e.s3X({imports:[r.qQ.forChild([{path:"",component:x}]),r.qQ]})}return i})(),I=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.a4G({type:i});static#i=this.\u0275inj=e.s3X({imports:[p.MD,v]})}return i})()}}]);