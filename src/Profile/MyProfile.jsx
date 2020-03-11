import React, { Component } from 'react';
// import React from 'react';
import axios from "axios";
import StudentList from '../Students/StudentList';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      fullname: "",
      email: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('token');

    axios
    .get('http://localhost:3000/api/v1/users/myprofile', { headers: {"Authorization" : `${token}`} })
    .then(response => {
      console.log(response.data);

      this.setState({id : response.data.id});
      this.setState({fullname : response.data.fullname});
      this.setState({email : response.data.email});

    })
  }

  handleLogout = () => {
    let token = localStorage.getItem('token');

    axios
    .delete('http://localhost:3000/api/v1/logout', { headers: {"Authorization" : `${token}`} })
    .then(response => {
      console.log(response.data);
      this.props.history.push(`/`);
    })
  }

  render(){
    const { id, fullname, email } = this.state;

    return (
      <div>
        <p>ID : {id}</p>
        <p>Fullname : {fullname}</p>
        <p>Email : {email}</p>

        <button onClick={this.handleLogout}>Logout</button>

        <StudentList />
      </div>
    )
  }
}
