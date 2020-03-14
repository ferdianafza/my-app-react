import React from 'react';
import axios from 'axios'; 
import { Link } from "react-router-dom";
import CreateStudent from './CreateStudent';
import SimpleReactFileUpload from './SimpleReactFileUpload';

export default class StudentList extends React.Component {
  state = {
    students: []
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://127.0.0.1:3000/api/v1/students/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3000/api/v1/students?page=1`)
    .then(res => {
        // console.log(res);
        console.log(res.data);
        const students = res.data.entries;
        this.setState({ students });
      })
      // .then(res => {
      //   const students = res.data;
      //   this.setState({ students });
      // })
  }

  fetchStudentsList = () => {
     axios.get(`http://127.0.0.1:3000/api/v1/students?page=1`)
      .then(res => {
        const students = res.data.entries;
        this.setState({ students });
      })
  }

  handleDelete = (studentId) => {
    axios.delete(`http://127.0.0.1:3000/api/v1/students/${studentId}`).
      then((response) => {
        alert('Student Deleted!')
        this.fetchStudentsList();
      });
  }

  handlePageChangeNext = () => {
    axios.get(`http://127.0.0.1:3000/api/v1/students?page=${1+1}`).
      then((response) => {
        const students = response.data.entries;
        this.setState({ students });
      });
  }

  handlePageChangePrev = () => {
    axios.get(`http://127.0.0.1:3000/api/v1/students?page=1`).
      then((response) => {
        const students = response.data.entries;
        this.setState({ students });
      });
  }

  render() {
    return (

      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
          { this.state.students.map(person =>
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>
                 <Link to={`/students/${person.id}`}>
                   Show
                 </Link>
                 <Link to={`/students/${person.id}/edit`}>
                   edit
                 </Link>
              </td>
              <td>
                    <button onClick={() => this.handleDelete(person.id)}>Delete</button>
              </td>
            </tr> 
          )}
          </tbody>
        </table>
        <button onClick={() => this.handlePageChangePrev()}>
          Prev
        </button>
        <button onClick={() => this.handlePageChangeNext()}>
          Next
        </button>
        <CreateStudent />
        <Link to={'/uploadfile'}> uploadfile </Link>
      </div>
    )
  }
}
