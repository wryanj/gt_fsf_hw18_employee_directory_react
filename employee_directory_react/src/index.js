/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import 'bootstrap/dist/css/bootstrap.min.css';

/* -------------------------------------------------------------------------- */
/*                             Render Virtual DOM                             */
/* -------------------------------------------------------------------------- */

  /*
    This renders all components, and is fed by the App.js file
    Everything inside this root element on the page will be manged
    by the react DOM
  */

  ReactDOM.render(<App />, document.getElementById('root'));


