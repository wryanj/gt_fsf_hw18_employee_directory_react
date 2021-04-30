/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { Component } from "react";
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import EmployeeTable from "../components/EmployeeTable";
    import API from "../utils/API";
    import Instruction from "../components/Instruction";
   

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    /* ------------------------- Define Class and State ------------------------- */

    class Directory extends Component {
        state = {
            result:[], 
            isFetching: false,
            stateTesting:"a state property"
        };

        /* ----------------------------- Handle API Call ---------------------------- */
  
        // When this component mounts, run the method to get the users via api
        componentDidMount() {
            this.getUserApi();
        };

        // Get the users via random user API
        getUserApi () {
            API.getUsers()
            .then(res => this.setState({result: res.data.results, isFetching: true}))
            .catch(err => console.log(err));
        }


        /* -------------- Render Components For Container, Row, Column -------------- */
            /*
                This component is rendered by app.js within the wrapper component. It returns
                The container component, the row sub component and the column subcomponent. 

                I am passing the result of my api call as a prop to my employee table component
            */

            render() {
                // Checking my state reults with the top console log
                console.log("state in the render", this.state);

                // Rendering components down to the table, and passing table this.state.results as props
                return (
                    <Container>
                         <Row>
                            <Col>
                                <Instruction/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <EmployeeTable
                                results = {this.state.result} // Passes results of the api call to my employee table component
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