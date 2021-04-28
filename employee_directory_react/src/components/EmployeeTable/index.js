/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import { useTable } from "react-table"
import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function Table({columns,data}) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for the table, using bootstrap classes
  return (
    // apply the table props
    <table {...getTableProps()} className="table table-dark">
      <thead>
        {// Loop over the header rows
        headerGroups.map(headerGroup => (
          // Apply the header row props
          <tr {...headerGroup.getHeaderGroupProps()}>
            {// Loop over the headers in each row
            headerGroup.headers.map(column => (
              // Apply the header cell props
              <th {...column.getHeaderProps()}>
                {// Render the header
                column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          // Prepare the row for display
          prepareRow(row)
          return (
            // Apply the row props
            <tr {...row.getRowProps()}>
              {// Loop over the rows cells
              row.cells.map(cell => {
                // Apply the cell props
                return (
                  <td {...cell.getCellProps()}>
                    {// Render the cell contents
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    )


}

function EmployeeTable() {

  /* ------------------------ React Column Definitions ------------------------ */

  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Phone Number',
        accessor: 'phone',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'DOB',
        accessor: 'dob',
      },
    ],
    []
  )

  /* ---------------------------- React Table Data ---------------------------- */

  const data = React.useMemo(
    () => [
        {
            image: 'image',
            name:'name',
            phone:'phonenumber',
            email: 'email',
            dob: 'DOB'
        },
        {
          image: 'image',
          name:'name',
          phone:'phonenumber',
          email: 'email',
          dob: 'DOB'
        },
        {
          image: 'image',
          name:'name',
          phone:'phonenumber',
          email: 'email',
          dob: 'DOB'
        }
    ]
)

  /* ------------------------- Return Table With Data ------------------------- */
    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    )


  /* ---------------- Create table instance using useTableHook ---------------- */

  // const tableInstance = useTable({ columns, data })

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = tableInstance

  

  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

  export default EmployeeTable;

