export const Endpoints = {
  LOGIN: '/Auth/Login',
  GENERA_CODIGO: '/seguridad/genera_codigo',
  PASS_RECOVER: '/seguridad/setUsuarioResetPassword',
  GET_SUBMENU: '/Opcion/GetSubMenu',

  GetListTableHead  :'/Administration/AuxiliaryTables/GetListTableHead',
  RegisterTableHead :'/Administration/AuxiliaryTables/RegisterTableHead',
  DeleteTableHead   :'/Administration/AuxiliaryTables/DeleteTableHead?iid_table_headboard=',

  GetListTableDetail   :'/Administration/AuxiliaryTables/GetListTableDetail',
  RegisterTableDetail  :'/Administration/AuxiliaryTables/RegisterTableDetail',
  DeleteTableDetail    :'/Administration/AuxiliaryTables/DeleteTableDetail?iid_table_detail=', 
  GetListTableDetailCB :'/Administration/AuxiliaryTables/GetListTableDetailCB?iid_table_headboard=',

  GetListModule :'/Administration/ModuleOption/GetListModule',
  RegisterModule:'/Administration/ModuleOption/RegisterModule',
  DeleteModule  :'/Administration/ModuleOption/DeleteModule?iid_module=',

  GetListOption  :'/Administration/ModuleOption/GetListOption',
  RegisterOption :'/Administration/ModuleOption/RegisterOption',
  DeleteOption   :'/Administration/ModuleOption/DeleteOption?iid_option=',
  GetListOptionsByModulo :'/Administration/ModuleOption/GetListOptionsByModule',

  GetListProfile  :'/Administration/Profiles/GetListProfile',
  RegisterProfile :'/Administration/Profiles/RegisterProfile',  
  RegisterProfileOption :'/Administration/Profiles/RegisterProfileOption',
  DeleteProfile   :'/Administration/Profiles/DeleteProfile?iid_profile=',

  GetListProfileAccessByProfile  :'/Administration/Profiles/GetListProfileAccessByProfile?iid_profile=', 

  GetListProfileAccess  :'/Administration/Profiles/GetListProfileAccess',
  RegisterProfileAccess :'/Administration/Profiles/RegisterProfileAccess',  
  DeleteProfileAccess   :'/Administration/Profiles/DeleteProfileAccess?iid_profile_access=',

  GetListUsers :'/Administration/Users/GetListUsers',
  RegisterUser:'/Administration/Users/RegisterUser',
  DeleteUser  :'/Administration/Users/DeleteUser?iid_user=',

  GetListRange :'/Masters/Range/GetListRange',
  RegisterRange:'/Masters/Range/RegisterRange',
  DeleteRange  :'/Masters/Range/DeleteRange?iid_range=',

  GetListShedule :'/Masters/Shedule/GetListShedule',
  RegisterShedule:'/Masters/Shedule/RegisterShedule',
  DeleteShedule  :'/Masters/Shedule/DeleteShedule?iid_shedule_weekly=',

/*  MASTERS */
  GetListComunity :'/Masters/Comunity/GetListComunity',  
  RegisterComunity :'/Masters/Comunity/RegisterComunity',  
  DeleteComunity :'/Masters/Comunity/DeleteComunity?iid_comunity=',
  GetListSheduleByWeek :'/Masters/Shedule/GetListSheduleByWeek?iid_week_shedule_weekly=',  


  
}
