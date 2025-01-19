import { useEffect, useState } from "react";
import styled from "styled-components";
import { v } from "../../styles/variables";
import { FaArrowsAltV } from "react-icons/fa";
import { Colorcontent } from "../atomos/Colorcontent";
import { ContentAccionesTabla } from "../organismo/ContentAccionesTabla";
import { ImagenContent } from "../moleculas/ImagenContent";
import { Icono2 } from "../atomos/Icono2";
import { Paginacion } from "./Paginacion";
import { IoFilter } from "react-icons/io5";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export function TablaProductos({ producto, handleDelete }) {
  const navigate = useNavigate();
  const [pagina, setPagina] = useState(1);

  const columns = [
    {
      accessorKey: "id",
      header: "Id ",
      cell: (info) => (
        <td data-title="Id" className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },
    {
      accessorKey: "imagen",
      header: "Icono ",
      cell: (info) => (
        <td data-title="Icono" className="ContentCellIcono">
          {info.getValue() != "-" ? (
            <ImagenContent imagen={info.getValue()} />
          ) : (
            <Icono2>{<v.iconofotovacia />} </Icono2>
          )}
        </td>
      ),
    },
    {
      accessorKey: "descripcion",
      header: "Descripcion ",
      cell: (info) => (
        <td data-title="Descripcion" className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },

    {
      accessorKey: "stock",
      header: "Stock ",
      cell: (info) => (
        <td data-title="ID Empresa" className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },

    {
      accessorKey: "codigo_interno",
      header: "Codigo Interno ",
      cell: (info) => (
        <td data-title="Codigo Interno " className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },
    {
      accessorKey: "precio_compra",
      header: "Precio Compra",
      cell: (info) => (
        <td data-title="Precio Compra " className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },
    {
      accessorKey: "precio_venta",
      header: "Precio Venta",
      cell: (info) => (
        <td data-title="Precio Venta " className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },
    {
      accessorKey: "acciones",
      header: "",
      enableSorting: false,
      cell: (info) => (
        <td className="ContentCell">
          <ContentAccionesTabla
            funcionEditar={() =>
              navigate(`/configuracion/productos/${info.row.original.id}/edit`)
            }
            funcionEliminar={() => handleDelete(info.row.original.id)}
          />
        </td>
      ),
    },
  ];

  const table = useReactTable({
    data: producto, // Cambiado de 'marcas' a 'data'
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Container>
      <table className="responsive-table">
        <thead>
          {table.getHeaderGroups().map(
            (
              headerGroup // Cambiado de getCenterHeaderGroups() a getHeaderGroups()
            ) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.column.columnDef.header}
                    {header.column.getCanSort() && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <IoFilter />
                      </span>
                    )}
                    {
                      {
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted()]
                    }
                  </th>
                ))}
              </tr>
            )
          )}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((item) => (
            <tr key={item.id}>
              {item.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Paginacion
        table={table}
        irinicio={() => table.setPageIndex(0)}
        pagina={table.getState().pagination.pageIndex + 1}
        setPagina={setPagina}
        maximo={table.getPageCount()}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  margin: 5% 3%;
  @media (min-width: ${v.bpbart}) {
    margin: 2%;
  }
  @media (min-width: ${v.bphomer}) {
    margin: 2em auto;
    /* max-width: ${v.bphomer}; */
  }
  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;
    @media (min-width: ${v.bpbart}) {
      font-size: 0.9em;
    }
    @media (min-width: ${v.bpmarge}) {
      font-size: 1em;
    }
    thead {
      position: absolute;

      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
      @media (min-width: ${v.bpbart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }
      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};
        &:first-of-type {
          text-align: center;
        }
      }
    }
    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }
    tr {
      @media (min-width: ${v.bpbart}) {
        display: table-row;
      }
    }

    th,
    td {
      padding: 0.5em;
      vertical-align: middle;
      @media (min-width: ${v.bplisa}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${v.bpbart}) {
        display: table-cell;
        padding: 0.5em;
      }
      @media (min-width: ${v.bpmarge}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${v.bphomer}) {
        padding: 0.75em;
      }
    }
    tbody {
      @media (min-width: ${v.bpbart}) {
        display: table-row-group;
      }
      tr {
        margin-bottom: 1em;
        @media (min-width: ${v.bpbart}) {
          display: table-row;
          border-width: 1px;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:nth-of-type(even) {
          @media (min-width: ${v.bpbart}) {
            background-color: rgba(78, 78, 78, 0.12);
          }
        }
      }
      th[scope="row"] {
        @media (min-width: ${v.bplisa}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        }
        @media (min-width: ${v.bpbart}) {
          background-color: transparent;
          text-align: center;
          color: ${({ theme }) => theme.text};
        }
      }
      .ContentCellIcono {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;

        border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        @media (min-width: ${v.bpbart}) {
          justify-content: center;
          border-bottom: none;
        }
        span {
          font-size: 1.8rem;
        }
      }
      .ContentCell {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;

        border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        @media (min-width: ${v.bpbart}) {
          justify-content: center;
          border-bottom: none;
        }
      }
      td {
        text-align: right;
        @media (min-width: ${v.bpbart}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
          text-align: center;
        }
      }
      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;
        @media (min-width: ${v.bplisa}) {
          font-size: 0.9em;
        }
        @media (min-width: ${v.bpbart}) {
          content: none;
        }
      }
    }
  }
`;
