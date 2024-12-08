import { create } from "zustand";
import { BuscarUsuarios,
         DataModulosConfiguracion,
         EditarUsuarios,
         EliminarPermisos,
         EliminarUsuarios,
         InsertarAsignaciones,
         InsertarPermisos,
         InsertarUsuarios,
         MostrarModulos,
         MostrarPermisos,
         MostrarUsuarios,
         MostrarUsuariosTodos,
         supabase, } from "../index";


export const useUsuariosStore = create((set, get) => ({
    datamodulos:[],
    insertarUsuarioAdmin: async (p) => {
        const {data, error} = await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
        });
        console.log("data del registro del user auth",data)
        if (error) return;
        const datauser = await InsertarUsuarios({
            idauth: data.user.id, 
            fecharegistro: new Date(), 
            tipouser:"superadmin",
        });
        return datauser;
    },
    idusuario:0,
    mostrarUsuarios: async()=>{
        const response = await MostrarUsuarios();
        set({idusuario:response.id});
        return response;
    },
    buscador: "",
    setBuscador: (p) => { set({ buscador:p })},
    dataUsuarios: [],
    UsuariosItemSelect: [],
    parametros: {},
    mostrarusuariosTodos:async (p) => {
        const response = await MostrarUsuariosTodos(p);
        set({parametros:p})
        set({dataUsuarios: response })
        set({UsuariosItemSelect: response[0]})
        return response;
    },
    selectUsuarios:(p)=>{
        set({UsuariosItemSelect:p})
    },
    insertarUsuarios:async (parametrosAuth, p, datacheckpermisos) => {
        const{data, error }= await supabase.auth.signUp({
            email: parametrosAuth.correo,
            password: parametrosAuth.pass
        })
        if(error){
            return null 
        }
        const dataUserNew = await InsertarUsuarios({
            nombres: p.nombres,
            nro_doc: p.nrodoc,
            telefono: p.telefono,
            direccion: p.direccion,
            fecharegistro: new Date(),
            estado: "activo",
            idauth: data.user.id,
            tipouser: p.tipouser,
            tipodoc: p.tipodoc,
            correo: p.correo,
        })
        await InsertarAsignaciones({
          id_empresa: p.id_empresa,
          id_usuario: dataUserNew.id,
        })

        datacheckpermisos.forEach(async (item) => {
            if (item.check) {
              let parametrospermisos = {
                id_usuario: dataUserNew.id,
                idmodulo: item.id,
              };
              await InsertarPermisos(parametrospermisos);
            }
        });   
        await supabase.auth.signOut();
    },
    eliminarUsuarios: async (p) => {
        await EliminarUsuarios(p);
        const {mostrarUsuarios}= get();
        const {parametros}= get();
        set(mostrarUsuarios(parametros));
    },
    editarUsuarios: async (p, datacheckpermisos, idempresa) => {
        await EditarUsuarios(p);
        await EliminarPermisos({id_usuario:p.id})
        datacheckpermisos.forEach(async (item) => {
            if (item.check) {
              let parametrospermisos = {
                id_usuario: p.id,
                idmodulo: item.id,
              };
              await InsertarPermisos(parametrospermisos);
            }
        });

        const {mostrarusuariosTodos}= get();
        set(mostrarusuariosTodos({_id_empresa:idempresa}));
    },
    buscarUsuarios: async (p) => {
        const response = await BuscarUsuarios(p);
        set({dataUsuarios: response });
        return response;
    },
    mostrarModulos: async () => {
        const response = await MostrarModulos();
        set({ datamodulos: response });
        let allDocs = [];
        return response;
    },

    datapermisos: [],
    datapermisosEdit: [], 
    mostrarPermisos: async (p) => {
        const response = await MostrarPermisos(p);
        set({ datapermisos: response });
        let allDocs=[];
        DataModulosConfiguracion.map((element) => {
            const statePermiso = response.some((objeto) =>
              objeto.modulos.nombre.includes(element.title)
            );
            if(statePermiso) {
              allDocs.push({...element,state:true})
            }else{
              allDocs.push({...element,state:false})
            }
        });
        DataModulosConfiguracion.splice(0,DataModulosConfiguracion.length)
        DataModulosConfiguracion.push(...allDocs)
        return response;
      },

    mostrarPermisosEdit: async (p) => {
      const response = await MostrarPermisos(p);
      set({ datapermisosEdit: response });
      return response;
    } 
}));