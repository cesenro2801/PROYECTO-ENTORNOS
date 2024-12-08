import { Routes, Route } from "react-router-dom";
import { ErrorMolecula, Home, Login, Configuracion, Marca, ProtectedRoute, SpinnerLoader, UserAuth, useEmpresaStore, useUsuariosStore, Categorias, Productos, Usuarios, Kardex, Reporte } from "../index";
import { useQuery } from "@tanstack/react-query";

export const MyRoutes = () => {
  const {user} = UserAuth();
  const {mostrarUsuarios, idusuario, mostrarPermisos}= useUsuariosStore();
  const {mostrarEmpresa}=useEmpresaStore();
  const {data:datausuarios, isLoading, error} = useQuery({queryKey:["mostrar usuarios"], queryFn:mostrarUsuarios});
  const {data:dataempresa}=useQuery({queryKey:["mostrar empresa"],queryFn:()=>mostrarEmpresa({idusaurio:idusuario}),enabled:!!datausuarios})
  const {data:datapermisos}=useQuery({queryKey:["mostrar permisos",{id_usuario:idusuario}],queryFn:()=>mostrarPermisos({id_usuario:idusuario}),enabled:!!datausuarios})

  if(isLoading){
    return <SpinnerLoader/>
  }
  if(error){
    return <ErrorMolecula mensaje={error.message}/>
  }
  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
          element={<ProtectedRoute user = {user} redirectTo="/"/>}
          >
              <Route path="/inicio" element={<Home />} />
              <Route path="/configurar" element={<Configuracion />} />
              <Route path="/configurar/marca" element={<Marca />} />
              <Route path="/configurar/categorias" element={<Categorias />} />
              <Route path="/configurar/productos" element={<Productos />} />
              <Route path="/configurar/personal" element={<Usuarios />} />
              <Route path="/kardex" element={<Kardex />} />
              <Route path="/reporte" element={<Reporte />}></Route>
          </Route>
        </Routes>
  );
}
