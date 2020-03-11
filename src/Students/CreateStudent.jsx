import React from 'react';
import axios from 'axios';


export default class CreateStudent extends React.Component {
  state = {
    firstname: '',
    lastname: ''
  }

  fetchStudentsList = () => {
     axios.get(`http://127.0.0.1:3000/api/v1/students`)
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const student = { 
                      firstname: this.state.firstname,
                      lastname: this.state.lastname
                    };

    axios.post(`http://127.0.0.1:3000/api/v1/students`, { student })
      .then(res => {
        console.log(res);
        console.log(res.data);
          alert('Student Created!');
        this.fetchStudentsList();
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            CreateStudent
            <input type="text" name="firstname" onChange={this.handleChange} />
            <input type="text" name="lastname" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
