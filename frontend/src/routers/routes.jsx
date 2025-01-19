import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../hooks/Layout";
import { Marca } from "../pages/Marca";
import { Categoria } from "../pages/Categoria";
import { RegistrarCategorias } from "../components/organismo/formulario/RegistrarCategoria";
import { RegistrarMarca } from "../components/organismo/formulario/RegistrarMarca";
import { Configuracion } from "../pages/Configuracion";
import { PageNot } from "../components/templates/404";
import { Home } from "../pages/Home";
import { Productos } from "../pages/Productos";
import { RegistrarProductos } from "../components/organismo/formulario/RegistrarProducto";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/configuracion"
          element={
            <Layout>
              <Configuracion />
            </Layout>
          }
        />

        <Route
          path="/configuracion/categoria"
          element={
            <Layout>
              <Categoria />
            </Layout>
          }
        />
        <Route
          path="/configuracion/categoria/new"
          element={
            <Layout>
              <RegistrarCategorias />
            </Layout>
          }
        />

        <Route
          path="/configuracion/categoria/:id/edit"
          element={
            <Layout>
              <RegistrarCategorias />
            </Layout>
          }
        />

        <Route
          path="/configuracion/marca"
          element={
            <Layout>
              <Marca />
            </Layout>
          }
        />

        <Route
          path="/configuracion/marca/new"
          element={
            <Layout>
              <RegistrarMarca />
            </Layout>
          }
        />

        <Route
          path="/configuracion/marca/:id/edit"
          element={
            <Layout>
              <RegistrarMarca />
            </Layout>
          }
        />

        <Route
          path="/configuracion/productos"
          element={
            <Layout>
              <Productos />
            </Layout>
          }
        />
        <Route
          path="/configuracion/productos/new"
          element={
            <Layout>
              <RegistrarProductos />
            </Layout>
          }
        />
        <Route
          path="/configuracion/productos/:id/edit"
          element={
            <Layout>
              <RegistrarProductos />
            </Layout>
          }
        />

        <Route path="*" element={<PageNot />} />
      </Routes>
    </BrowserRouter>
  );
}
