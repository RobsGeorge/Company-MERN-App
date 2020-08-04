import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateCompany from "./components/create-company.component";
import EditCompany from "./components/edit-company.component";
import CompanyList from "./components/company-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-company"} className="nav-link">
                Company React App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-company"} className="nav-link">
                  Create Company
                </Link>
              </Nav>

              {/*<Nav>
                <Link to={"/edit-company/:code"} className="nav-link">
                  Edit Company
                </Link>
              </Nav>*/}

              <Nav>
                <Link to={"/company-list"} className="nav-link">
                  Company List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateCompany} />
                <Route path="/create-company" component={CreateCompany} />
                <Route path="/edit-company/:code" component={EditCompany} />
                <Route path="/company-list" component={CompanyList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
