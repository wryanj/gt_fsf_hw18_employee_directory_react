/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import { useTable, useSortBy } from "react-table"
  import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Components                            */
/* -------------------------------------------------------------------------- */

  /* -------------------------- Defining Table and UI ------------------------- */

  function Table({columns,data}) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, headerGroups, rows, prepareRow } = useTable(
      {
      columns,
      data,
      },
      useSortBy
    )

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
                // Apply the header cell props and ad in props to control sorting
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {// Render the header and add sort direction indicator
                  column.render('Header')}
                  <span>
                    {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                  </span>
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


/* --------------------- Define Employee Table Component -------------------- */
  /*
    I pass this props from Directory.js I think, 
    so somewhere in here I need to hand off that data to populate the table
  */

  function EmployeeTable(props) {

    // Check props
    console.log('props in Employee Table function are', props.results);

    // Define a new array of user objects to pass to my table
    let users = props.results.map (user => 
      (
        {
          image:<img src={user.picture.thumbnail} alt="employee profile"/>, 
          name: `${user.name.first} ${user.name.last}`,
          phone: user.phone,
          email: user.email,
          dob: user.dob.date
        }
      )
    );

    console.log('my new array', users); // checking my object array in the console for testing

    // Define columns for table
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

    // Define data for table
      //eslint-disable-next-line
      const data = React.useMemo(() => users, [])
   
    /*
          If I was seeding this table to see how it worked, I did it as seen below:

      //   const data = React.useMemo(
      //     () => [
      //         {
      //             image: 'image',
      //             name:'name',
      //             phone:'phonenumber',
      //             email: 'email',
      //             dob: 'DOB'
      //         },
      //         {
      //           image: 'image',
      //           name:'name',
      //           phone:'phonenumber',
      //           email: 'email',
      //           dob: 'DOB'
      //         },
      //         {
      //           image: 'image',
      //           name:'name',
      //           phone:'phonenumber',
      //           email: 'email',
      //           dob: 'DOB'
      //         }
      //     ]
      // )
  */

    // Return the Table With Data For Rendering
      return (
        <div>
          <Table columns={columns} data={data} />
        </div>
      )

  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

  export default EmployeeTable;

