/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    //import {useTable} from "react-table";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


/* ------------------------------ Render Table ------------------------------ */

/*
    Table for holding employee values that is rendered as a prop to the coluumn component on the directory page.
    The props for this is the results of a search API for random users that I pass to this component
    on Directory.js
*/

function EmployeeTable (props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">input image</th>
          <td>Julio Jones</td>
          <td>404.313.2566</td>
          <td>iceman@db.com</td>
          <td>01/15/1982</td>
        </tr>
        <tr>
          <th scope="row">input image</th>
          <td>Matt Ryan</td>
          <td>404.313.2566</td>
          <td>iceman@db.com</td>
          <td>01/15/1982</td>
        </tr>
        <tr>
          <th scope="row">input image</th>
          <td>Todd Gurley</td>
          <td>404.313.2566</td>
          <td>iceman@db.com</td>
          <td>01/15/1982</td>
        </tr>
      </tbody>
  </table>
  ) 

}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default EmployeeTable;