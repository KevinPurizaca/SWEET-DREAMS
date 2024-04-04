import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { HttpCoreService } from '../core/services/httpCore.service';
import { Endpoints } from '../core/config/endpoints';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService, private httpCoreService: HttpCoreService,) { }

    ngOnInit() {
        // this.loadData();
        this.setMenu();
    }

   

    loadData(){
        //crear meqtodo para qtraer los accesos por perfil
    // this.httpCoreService.get(Endpoints.GetListProfileAccessByProfile + 1).subscribe(res =>{
    //     if(res.isSuccess){
    //         let primernivel:any[] = this.organizarDatosPorModulo(res.data.filter((x:any)=> x.baccess_view === true));
    //         this.model.push({
    //             items:[
    //                 ...primernivel
    //             ]
    //         })
    //         localStorage.setItem('menu', JSON.stringify(this.model));
    //     }
    // })

      this.model = localStorage.getItem('menu') ? JSON.parse(localStorage.getItem('menu')) : [];  
}

  

    organizarDatosPorModulo(datos: any[]): any[] {
        const modules = [];
    
        datos.forEach(objeto => {
            const moduloID = objeto.iid_module;
    
            // Buscar si el módulo ya existe en la lista de módulos
            const moduloExistente = modules.find(modulo => modulo.label === objeto.vname_module);
    
            // Si el módulo no existe, agregarlo a la lista de módulos
            if (!moduloExistente) {
                modules.push({       
                    iid_module : objeto.iid_module,           
                    label: objeto.vname_module,
                    icon: 'pi pi-'+objeto.vicon_module,
                    vurl_module: objeto.vurl_module,
                    items: []   
                });
            }
    
            // Buscar el módulo recién agregado o ya existente en la lista
            const moduloActual = modules.find(modulo => modulo.label === objeto.vname_module);
    
            // Agregar la opción al módulo
            moduloActual.items.push({
                label: objeto.vname_option,
                iid_module : objeto.iid_module,           
                icon: 'pi pi-' + objeto.vicon_option, // Reemplaza 'vicon_option' por el nombre real del campo de ícono
                routerLink: [objeto.vurl_module, objeto.vurl_option].join(''),// Concatena las URL del módulo y la opción
                iid_comunity : objeto.iid_comunity,
            });
        });
    
        return modules;
    }
    
      setMenu(){
        this.model =       [
            {
                "items": [
                    {
                        "iid_module": 1,
                        "label": "Administración",
                        "icon": "pi pi-credit-card",
                        "vurl_module": "/Administration",
                        "items": [
                            {
                                "label": "Usuarios",
                                "iid_module": 1,
                                "icon": "pi pi-user",
                                "routerLink": "/Administration/Users",
                                "iid_comunity": null
                            },
                            {
                                "label": "Perfiles",
                                "iid_module": 1,
                                "icon": "pi pi-building",
                                "routerLink": "/Administration/Profiles",
                                "iid_comunity": null
                            },
                            {
                                "label": "Tablas Auxiliares",
                                "iid_module": 1,
                                "icon": "pi pi-table",
                                "routerLink": "/Administration/Axiliary-Tables",
                                "iid_comunity": null
                            },
                            {
                                "label": "Opciones Menu",
                                "iid_module": 1,
                                "icon": "pi pi-wrench",
                                "routerLink": "/Administration/Options-Menu",
                                "iid_comunity": null
                            }
                        ]
                    },
                    {
                        "iid_module": 2,
                        "label": "Maestras",
                        "icon": "pi pi-briefcase",
                        "vurl_module": "/Masters",
                        "items": [
                            {
                                "label": "Comunidades",
                                "iid_module": 2,
                                "icon": "pi pi-flag-fill",
                                "routerLink": "/Masters/Comunitys",
                                "iid_comunity": null
                            },
                            {
                                "label": "Rangos",
                                "iid_module": 2,
                                "icon": "pi pi-tags",
                                "routerLink": "/Masters/ranges",
                                "iid_comunity": null
                            }
                        ]
                    },
                    {
                        "iid_module": 4,
                        "label": "Comunidades",
                        "icon": "pi pi-box",
                        "vurl_module": "/Group-Comunity",
                        "items": [
                            {
                                "label": "Sweet Candy",
                                "iid_module": 4,
                                "icon": "pi pi-building",
                                "routerLink": "/Group-Comunity/Comunity/Sweet Candy",
                                "iid_comunity": 1
                            },
                            {
                                "label": "Sweet Caramel",
                                "iid_module": 4,
                                "icon": "pi pi-building",
                                "routerLink": "/Group-Comunity/Comunity/Sweet Caramel",
                                "iid_comunity": 2
                            },
                            {
                                "label": "Sweet Chocolate",
                                "iid_module": 4,
                                "icon": "pi pi-building",
                                "routerLink": "/Group-Comunity/Comunity/Sweet Chocolate",
                                "iid_comunity": 3
                            }
                        ]
                    },
                    {
                        "iid_module": 5,
                        "label": "Horarios",
                        "icon": "pi pi-calendar",
                        "vurl_module": "/Group-Comunity",
                        "items": [
                            {
                                "label": "Horario Sweet Candy",
                                "iid_module": 5,
                                "icon": "pi pi-calendar",
                                "routerLink": "/Group-Comunity/Shedules/Horario Sweet Candy",
                                "iid_comunity": 1
                            },
                            {
                                "label": "Horario Sweet Caramel",
                                "iid_module": 5,
                                "icon": "pi pi-calendar",
                                "routerLink": "/Group-Comunity/Shedules/Horario Sweet Caramel",
                                "iid_comunity": 2
                            },
                            {
                                "label": "Horario Sweet Chocolate",
                                "iid_module": 5,
                                "icon": "pi pi-calendar",
                                "routerLink": "/Group-Comunity/Shedules/Horario Sweet Chocolate",
                                "iid_comunity": 3
                            }
                        ]
                    },
                    {
                        "iid_module": 3,
                        "label": "Reportes",
                        "icon": "pi pi-book",
                        "vurl_module": "/Reports",
                        "items": [
                            {
                                "label": "Usuarios",
                                "iid_module": 3,
                                "icon": "pi pi-users",
                                "routerLink": "/Reports/users",
                                "iid_comunity": null
                            }
                        ]
                    }
                ]
            }
        ]
    }

}













//#region MP_AvisosEmitidos


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')   
=======================================================================================================================================================================
objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web


=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetAll
=======================================================================================================================================================================
strRutaPlantilla = New TablaDeTablasBL(Globales.cteCodEmp, "EMITIDOS","005").Lista.Item(0).TABLC_VALITE 
012	EMITIDOS  	005	\\10.4.50.48\webarchives\AvisosEmitidosCFP\Plantilla\




strArchivo = New TablaDeTablasBL(Globales.cteCodEmp, "EMITIDOS", "006").Lista.Item(0).TABLC_VALITE + lstTitulos.Item(0).Archivo + ".xls" 
012	EMITIDOS  	006	\\10.4.50.48\webarchives\AvisosEmitidosCFP\Generados\



*/

//#endregion


//#region MP_AvisosIbope


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web



=======================================================================================================================================================================
[dbo].[upPUBLT_TABLADETABLASGetAll]

SELECT * FROM [dbo].[PUBLT_TABLADETABLAS] WITH(NOLOCK)
WHERE  [TABLC_CODTAB] = 'AVISIBOPE' AND [TABLC_CODITE] = '005'AND ([TABLC_EST] <> '0') 
=======================================================================================================================================================================
strRutaPlantilla = New TablaDeTablasBL(Globales.cteCodEmp, "AVISIBOPE", "005").Lista.Item(0).TABLC_VALITE
012	AVISIBOPE 	005	\\10.4.50.48\webarchives\AvisosIbopeCFP\Plantilla\	1

strArchivo = New TablaDeTablasBL(Globales.cteCodEmp, "AVISIBOPE", "006").Lista.Item(0).TABLC_VALITE + lstTitulos.Item(0).Archivo + ".xls"
012	AVISIBOPE 	006	\\10.4.50.48\webarchives\AvisosIbopeCFP\Generados\	1
*/

//#endregion


//#region Class MP_AvisosOmitidos


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================


*/





//#endregion 


//#region MP_CargaPlantillaProgramacion
/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetAllxValite

SELECT [TABLC_CODEMP]
      ,[TABLC_CODTAB]
      ,[TABLC_CODITE]
      ,[TABLC_VALITE]
      ,[TABLC_EST]
      ,[TABLC_USRMOD]
      ,[TABLC_FECMOD]
      ,[TABLC_PCMOD]
      ,rtrim(ltrim(TABLC_NEMONICO)) TABLC_NEMONICO
      ,CASE WHEN [TABLC_EST]=1 THEN 'ACTIVO' ELSE 'INACTIVO' END TABLC_ESTTexto 
  FROM [dbo].[PUBLT_TABLADETABLAS]
  WHERE [TABLC_CODTAB] = 'DIRPROGRAM' AND ([TABLC_EST] <> '0')
 ORDER BY [TABLC_VALITE]
=======================================================================================================================================================================


objTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(Globales.cteCodEmp, "DIRPROGRAM")

012	DIRPROGRAM	001	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\
012	DIRPROGRAM	002	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Errores\
012	DIRPROGRAM	003	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Genericas\
012	DIRPROGRAM	004	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Procesados\
012	DIRPROGRAM	006	00
012	DIRPROGRAM	005	01
012	DIRPROGRAM	007	23
012	DIRPROGRAM	008	59
012	DIRPROGRAM	009	tgpesvlcli1175
012	DIRPROGRAM	010	USU003
=======================================================================================================================================================================

*/
//#endregion


//#region  MP_CargaPlantillaProgramacionFueraDeHora
/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================


=======================================================================================================================================================================
[dbo].[upPUBLT_TABLADETABLASGetAll]
	SELECT *
	FROM [dbo].[PUBLT_TABLADETABLAS] WITH(NOLOCK)
	WHERE 
	[TABLC_CODTAB] = 'DIRPROGRAM' 
	
=======================================================================================================================================================================

objTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(Globales.cteCodEmp, "DIRPROGRAM")
012	DIRPROGRAM	001	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\		            Servicio carga plantillas de programación: Ruta en donde se buscarán los archivos excel a cargar.
012	DIRPROGRAM	002	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Errores\		    Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel procesados con error.
012	DIRPROGRAM	003	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Genericas\		Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel genéricos a cargar.
012	DIRPROGRAM	004	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Procesados\		Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel cargados correctamente.
012	DIRPROGRAM	005	01		                                                        Servicio carga plantillas de programación: Hora de inicio por defecto
012	DIRPROGRAM	006	00                                                          	Servicio carga plantillas de programación: Minuto de inicio por defecto
012	DIRPROGRAM	007	23	                                                        	Servicio carga plantillas de programación: Hora fin por defecto
012	DIRPROGRAM	008	59  	                                                    	Servicio carga plantillas de programación: Minuto fin por defecto
012	DIRPROGRAM	009	tgpesvlcli1175		                                            Servicio carga plantillas de programación: HostName del proceso
012	DIRPROGRAM	010	USU003		                                                    Servicio carga plantillas de programación: Usuario del proceso
=======================================================================================================================================================================

*/
//#endregion





//#region  MP_CargaPlantillaProgramacionyProgAut
/*
56  oTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(sCodigoEmpresa, "RUTPLANPRG")

012	RUTPLANPRG	002	D:\WEBARCHIVES\PlantillasProgramacionCFP\Destino\	Carga automátidad de la Plantilla de Programación. Ruta Destino: Lugar donde el RPA almacenará los archivos formateados.
012	RUTPLANPRG	004	D:\WEBARCHIVES\PlantillasProgramacionCFP\Observados\	Carga automátidad de la Plantilla de Programación. Ruta Observados: Lugar donde el proceso MCI almacenará los archivos que no fueron observados por tener alguna observación.
012	RUTPLANPRG	001	D:\WEBARCHIVES\PlantillasProgramacionCFP\Origen\	Carga automátidad de la Plantilla de Programación. Ruta Origen: Lugar donde el usuario guardará sus archivos a ser procesados.
012	RUTPLANPRG	003	D:\WEBARCHIVES\PlantillasProgramacionCFP\Procesados\	Carga automátidad de la Plantilla de Programación. Ruta Procesado: Lugar donde el proceso MCI almacenará los archivos procesados.


*/
//#endregion





//#region MP_ContratosSobregirados
/*
 Dim strRuta As String = New TablaDeTablasBL(Globales.cteCodEmp, "ARLDIR", Nothing).Lista(0).TABLC_VALITE
reader = New StreamReader(strRuta & "\Correo\Plantillas\ContratoSobregirado.txt")

012	ARLDIR    	001	\\10.4.50.48\WEBARCHIVES
012	ARLDIR    	002	\\10.4.50.48\WEBARCHIVES\SERVICIOSCFP
\\10.4.50.48\WEBARCHIVES\SERVICIOSCFP\Correo\Plantillas\ContratoSobregirado.txt
\\10.4.50.48\WEBARCHIVES\ContratoSobregirado.txt
\SERVICIOS\PLANTILLAS\TemplateReporteEstadoCuenta.xls

\\10.4.50.48\WEBARCHIVES\SERVICIOS\PLANTILLAS\TemplateReporteEstadoCuenta.xls
*/
//#endregion


//#region 
/*

*/
//#endregion


//#region 
/*

*/
//#endregion
