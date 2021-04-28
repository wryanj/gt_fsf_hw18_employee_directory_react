/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from "react";
  import { BrowserRouter as Router, Route } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Wrapper from "./components/Wrapper";
  import Directory from "./pages/Directory";

/* -------------------------------------------------------------------------- */
/*                              Render Component                              */
/* -------------------------------------------------------------------------- */

  /*
    This component is rendered within the document's root element by
    the highest level index.js in the src directory

    This renders the navbar, and the main page which I have called directory. 
    The page is contained within a wrapper. Here is where I pass wrapper the Directory
    page as a prop, so that it renders this within a main section defined by the wrapper component.
    
    NOTE for this project, I dont use "exact path" in my Route component, since I only
    have one page. So I want it to be / or /Directory to render directoty. 

    FOLLOW UP
     <Navbar data-component="Navbar" /> I took this line out under div, as it was causing issue. 
     Will re-visit what issue was when I can
  */

  function App() {
    return (
      <Router>
        <div data-component="DivInRouter">
          <Navbar data-component="Navbar"/>
          <Wrapper data-component="Wrapper">
            <Route path="/" component={Directory} />
          </Wrapper>
        </div>
      </Router>
    );
  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
  
  /*
    This exports the app component for rendering within index.js in src
  */

    export default App;
