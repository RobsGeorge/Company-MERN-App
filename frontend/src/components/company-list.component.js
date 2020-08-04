import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CompanyTableRow from './CompanyTableRow';


export default class CompanyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/companies/')
      .then(res => {
        this.setState({
          companies: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.companies.map((res, i) => {
      return <CompanyTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Address</th>
            <th>IsActive</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
