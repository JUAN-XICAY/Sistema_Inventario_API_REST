import { v } from "../styles/variables";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];

//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <v.iconoreportes />,
    to: "/reportes",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configuracion",
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
    icono: "https://i.ibb.co/NF9752B/buscando.png",
    // icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/configuracion/productos",
  },
  {
    title: "Personal",
    subtitle: "ten el control de tu personal",
    icono: "https://i.ibb.co/VTyJcdF/jefe.png",
    // icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
    link: "/configuracion/personal",
  },

  {
    title: "Clientes",
    subtitle: "gestiona tus clientes",
    icono: "https://i.ibb.co/g4YBrpf/satisfecho.png",
    link: "/configuracion/clientes",
  },

  {
    title: "Tu empresa",
    subtitle: "configura tus opciones básicas",
    icono: "https://i.ibb.co/bRrp8g6/edificio.png",
    // icono: "https://i.ibb.co/Qb0wxkH/edificio-de-oficinas.png",
    // icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/configuracion/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "asigna categorias a tus productos",
    icono: "https://i.ibb.co/jk9D3n1/idea.png",
    // icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
    link: "/configuracion/categoria",
  },
  {
    title: "Marca de productos",
    subtitle: "gestiona tus marcas",
    icono: "https://i.ibb.co/ygKM1MB/diseno-de-producto.png",
    // icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/configuracion/marca",
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
    descripcion: "Dpi",
    icono: "🪖",
  },
  {
    descripcion: "Pasaporte",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];
