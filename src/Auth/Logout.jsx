import React from 'react';
import axios from "axios";


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    // const user = { api_v1_user: {
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    }

    axios
    .delete('http://localhost:3000/api/v1/logout')
    .then(response => {
      console.log(response);
      this.props.history.push(`/`);
    })

  }

  render(){
    const { email, password } = this.state;

    return (
      <form onSubmit={e => this.onSubmitHandler(e)}>
        <input type="submit"></input>
      </form>
    )
  }
}
