import { useState } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  Pagination,
  PageInfo,
  PageButton,
  SearchInput,
  PageSizeSelector,
  EmptyMessage,
} from "./DataTable.styles";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

/**
 * Composant DataTable réutilisable
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.data - Les données à afficher dans le tableau
 * @param {Array} props.columns - Les colonnes à afficher
 * @param {string} props.emptyMessage - Message à afficher quand il n'y a pas de données
 * @param {Array} props.pageSizeOptions - Options pour le nombre d'éléments par page
 * @param {number} props.defaultPageSize - Taille de page par défaut
 * @param {boolean} props.showGlobalFilter - Afficher le filtre global ou non
 * @param {boolean} props.showPagination - Afficher la pagination ou non
 */
export function DataTable({
  data = [],
  columns = [],
  emptyMessage = "No data available",
  pageSizeOptions = [10, 20, 30, 40, 50],
  defaultPageSize = 10,
  showGlobalFilter = true,
  showPagination = true,
}) {
  const [globalFilter, setGlobalFilter] = useState("");

  // Configuration du tableau
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
    },
  });

  return (
    <TableContainer>
      {/* Recherche globale */}
      {showGlobalFilter && (
        <SearchInput
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          aria-label="Search all columns"
        />
      )}

      {/* Le tableau */}
      {data.length === 0 ? (
        <EmptyMessage>{emptyMessage}</EmptyMessage>
      ) : (
        <StyledTable>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHeaderCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    role="columnheader"
                    aria-sort={
                      header.column.getIsSorted()
                        ? header.column.getIsSorted() === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {/* Indicateur de tri */}
                    {{ asc: " 🔼", desc: " 🔽" }[header.column.getIsSorted()] ?? ""}
                  </TableHeaderCell>
                ))}
              </tr>
            ))}
          </TableHeader>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      )}

      {/* Pagination */}
      {showPagination && data.length > 0 && (
        <Pagination>
          <div>
            <PageSizeSelector
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value));
              }}
              aria-label="Rows per page"
            >
              {pageSizeOptions.map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </PageSizeSelector>
          </div>

          <PageInfo>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </PageInfo>

          <div>
            <PageButton
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label="First page"
            >
              {"<<"}
            </PageButton>
            <PageButton
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Previous page"
            >
              {"<"}
            </PageButton>
            <PageButton
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Next page"
            >
              {">"}
            </PageButton>
            <PageButton
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-label="Last page"
            >
              {">>"}
            </PageButton>
          </div>
        </Pagination>
      )}
    </TableContainer>
  );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  defaultPageSize: PropTypes.number,
  showGlobalFilter: PropTypes.bool,
  showPagination: PropTypes.bool,
};
