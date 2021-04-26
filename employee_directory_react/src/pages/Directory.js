/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { Component } from "react";
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import EmployeeTable from "../components/EmployeeTable";
    //import API from "../utils/API";

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    /* ------------------------- Define Class and State ------------------------- */

    class Directory extends Component {
        state = {
            result: {},
            search: ""
        };

    /* ----------------------------- Handle API Call ---------------------------- */

        // searchPeople = query => {
        //     API.search(query)
        //     .then(res => this.setState({ result: res.data }))
        //     .catch(err => console.log(err));
        // };

    /* -------------- Render Components For Container, Row, Column -------------- */
        /*
            This component is rendered by app.js within the wrapper component. It returns
            The container component, the row sub component and the column subcomponent. 
        */

        render() {
            return (
            <Container>
                <Row>
                    <Col>
                        <EmployeeTable/>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    /*
        Exported for import within app.js
    */

    export default Directory;