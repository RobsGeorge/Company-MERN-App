import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateCompany extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeCompanyCode = this.onChangeCompanyCode.bind(this);
    this.onChangeCompanyAddress = this.onChangeCompanyAddress.bind(this);
    this.onChangeCompanyIsActive = this.onChangeCompanyIsActive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      code: '',
      address: '',
      isActive: ''
    }
  }

  onChangeCompanyName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeCompanyCode(e) {
    this.setState({ code: e.target.value })
  }

  onChangeCompanyAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeCompanyIsActive(e) {
    this.setState({ isActive: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const companyObject = {
      name: this.state.name,
      code: this.state.code,
      address: this.state.address,
      isActive: this.state.isActive
    };

    axios.post('http://localhost:3000/companies/create-company', companyObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      code: '',
      address: '',
      isActive: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeCompanyName} />
        </Form.Group>

        <Form.Group controlId="Code">
          <Form.Label>Code</Form.Label>
          <Form.Control type="Number" value={this.state.code} onChange={this.onChangeCompanyCode} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeCompanyAddress} />
        </Form.Group>

        <Form.Group controlId="IsActive">
          <Form.Label>IsActive</Form.Label>
          <Form.Control type="Number" value={this.state.isActive} onChange={this.onChangeCompanyIsActive} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Company
        </Button>
      </Form>
    </div>);
  }
}
