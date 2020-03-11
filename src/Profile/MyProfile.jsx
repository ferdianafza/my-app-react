import React, { Component } from 'react';
// import React from 'react';
import axios from "axios";

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
      // this.setState('id', response.data.id)
      // this.setState('fullname', response.data.fullname)
      // this.setState('email', response.data.email)
    })
  }

  render(){
    const { id, fullname, email } = this.state;

    return (
      <div>
        <p>ID : {id}</p>
        <p>Fullname : {fullname}</p>
        <p>Email : {email}</p>
      </div>
    )
  }
}
