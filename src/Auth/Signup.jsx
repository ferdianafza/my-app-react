import React from 'react';
import axios from "axios";


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const user = { user: {
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
    }

    // try {
    //   const response = await API.post('/v1/login', user);
    //   console.log('👉 Returned data:', response);
    // } catch (e) {
    //   console.log(`😱 Axios request failed: ${e}`);
    // }

    axios
    .post('http://localhost:3000/api/v1/signup', user)
    .then(response => {
      console.log(response.data);
      this.props.history.push(`/`);
    })

  }

  render(){
    const { fullname, email, password, password_confirmation } = this.state;

    return (
      <form onSubmit={e => this.onSubmitHandler(e)}>
        <label>Fullname</label>
        <input
          type='text'
          name='fullname'
          value={fullname}
          onChange={this.handleInputChange}
          />
          <br />
          <label>Email</label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={this.handleInputChange}
          />
          <br />
        <label>Password</label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Password Confirmation</label>
        <input
          type='text'
          name='password_confirmation'
          value={password_confirmation}
          onChange={this.handleInputChange}
        />
        <br />
        <input type="submit"></input>
      </form>
    )
  }
}
