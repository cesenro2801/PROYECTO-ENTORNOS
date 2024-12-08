import { v } from "../styles/variables";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];

//data SIDEBAR
export const LinksArray = [
  {
    label: "Inicio",
    icon: <AiOutlineHome />,
    to: "/inicio",
  },
  {
    label: "Kardex",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <v.iconoreportes />,
    to: "/reporte",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];

//data configuracion
export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "registra tus productos",
    icono: "https://i.ibb.co/QXPHcF8/icons8-products-94.png",
    link: "/configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "ten el control de tu personal",
    icono: "https://i.ibb.co/LJsCBvc/personal1.png",
    link: "/configurar/personal",
  },
  {
    title: "Categorias de productos",
    subtitle: "asigna categorias a tus productos",
    icono: "https://i.ibb.co/dG3vLyr/category.png",
    link: "/configurar/categorias",
  },
  {
    title: "Marca de Productos",
    subtitle: "gestiona tus marcas",
    icono: "https://i.ibb.co/1zM6742/marca1.png",
    link: "/configurar/marca",
  },
  
];
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "CC",
    icono: "🪖",
  },
  {
    descripcion: "CE",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];
