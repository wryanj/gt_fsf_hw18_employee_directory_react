/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    // import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    /*
        This component is rendered as a subcomponent in App.js to my main content
        specified in the router. 

        The link component is predefined from react-router-dom library, which is
        why I have it imported above and not self-defined as a component. 

        This nabvar is always present for any page, and it is passed NO props. 

        Note- removed this from within the li elemenet for testing
                        <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/directory"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        Directory
                        </Link>
    */

    function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-2 text-light bg-dark font-weight-bold">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item my-3">
                     Employee Directory
                    </li>
                </ul>
            </div>
        </nav>
    );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Navbar;