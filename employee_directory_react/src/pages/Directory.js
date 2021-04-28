/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { Component } from "react";
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import EmployeeTable from "../components/EmployeeTable";
    import API from "../utils/API";
   

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    /* ------------------------- Define Class and State ------------------------- */

    class Directory extends Component {
        state = {
            result:[], 
            testMessage:"a state property"
        };

        /* ----------------------------- Handle API Call ---------------------------- */

  
        // When this component mounts, call the api for random users
        componentDidMount() {
            API.getUsers()
                //.then(res=> console.log(res.data.results))
                .then(res => this.setState({result: res.data.results})) 
                .catch(err => console.log(err));
        };


        /* -------------- Render Components For Container, Row, Column -------------- */
            /*
                This component is rendered by app.js within the wrapper component. It returns
                The container component, the row sub component and the column subcomponent. 

                I am passing the result of my api call as a prop to my employee table component
            */

            render() {
                console.log("state in the render", this.state);
                return (
                <Container>
                    <Row>
                        <Col>
                            <EmployeeTable
                               results = {this.state.results}
                            />
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