import React, { useMemo, useState } from 'react';
import { useTable, useFilters } from 'react-table';

const DataTable = ({ columns, data }) => {
  const [filterInputs, setFilterInputs] = useState({});

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  const handleFilterChange = (columnId, value) => {
    setFilterInputs((prevFilterInputs) => ({
      ...prevFilterInputs,
      [columnId]: value,
    }));
    setFilter(columnId, value);
  };

  const tableInstance = useMemo(() => {
    return (
      <div className="table-container">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id} className="control-head">
                    {column.render('Header')}
                    <div>
                      {column.id !== 'doc' && column.id !== 'actions' && (
                        <input
                          type="text"
                          value={filterInputs[column.id] || ''}
                          onChange={(e) =>
                            handleFilterChange(column.id, e.target.value)
                          }
                          placeholder="Search..."
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key={cell.column.id} className="control">
                        {cell.column.id === 'actions' ? (
                          <div className="button-con">
                            {cell.render('Cell')}
                          </div>
                        ) : (
                          cell.render('Cell')
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }, [
    getTableBodyProps,
    getTableProps,
    handleFilterChange,
    headerGroups,
    prepareRow,
    rows,
    filterInputs,
  ]);

  return (
    <div className="table-wrapper">
      {tableInstance}
    </div>
  );
};

export default DataTable;
