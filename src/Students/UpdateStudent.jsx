import React from 'react';
import axios from 'axios';

export default class UpdateStudent extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		fullname: "",
  		lastname: ""
  	}
  }

  componentDidMount() {
  	const { match: {params: { id } } } = this.props;
  	axios.get(`http://127.0.0.1:3000/api/v1/students/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
	      this.setState({id : res.data.id});
	      this.setState({firstname : res.data.firstname});
	      this.setState({lastname : res.data.lastname});

      })
  }

  handleChange = (even) => {
  	this.setState({ [even.target.name]: even.target.value });
  }

  updateStudentRequest = (even) => {
  	fetch(`http://127.0.0.1:3000/api/v1/students/${this.state.id}`, {
  		method: 'put',
  		body: JSON.stringify(this.state),
  		headers: {'Content-Type' : 'application/json'},
  	}).then((response) => {
  		alert('Student updated successfully');
  		this.props.history.push(`/myprofile`);
  	})
  }



  render() {
  	const { id, firstname, lastname } = this.state;
    return (
      <div>
          <label>
            UpdateStudent
            <input type="text" name="firstname" value={firstname} onChange={this.handleChange} />
            <input type="text" name="lastname"  value={lastname} onChange={this.handleChange} />
          </label>
          <button onClick={this.updateStudentRequest}>Update</button>
      </div>
    )
  }
}
