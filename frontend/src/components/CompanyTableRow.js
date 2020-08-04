import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';



export default class CompanyTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    deleteCompany() {
        axios.delete('http://localhost:3000/companies/delete-company/' + this.props.obj.code)
            .then((res) => {
                console.log('Company successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.code}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.isActive}</td>
                <td>
                    <Link className="edit-link" to={"/edit-company/" + this.props.obj.code}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCompany} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
