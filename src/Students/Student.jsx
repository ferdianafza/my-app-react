import React from "react";
import axios from "axios";

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: {} };
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

   

render() {
    const { id, firstname, lastname } = this.state;

    return (
      <div className="">
        <p>
          <label>
            Student : {id}
          </label>
        </p>
        <p>
          <label>
            Firstname : {firstname}
          </label>
        </p>
        <p>
          <label>
            Lastname : {lastname}
          </label>
        </p>
      </div>
    );
  }
}