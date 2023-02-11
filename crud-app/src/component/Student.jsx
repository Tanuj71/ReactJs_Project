import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class Student extends Component {
  constructor(props){
super(props)

this.state={
student: []
}
this.addStudent=this.addStudent.bind(this);
  }
  componentDidMount(){
    StudentService.getStudent().then((res) => {
      this.setState({student:res.data});
    });
  }
  addStudent(){
    this.props.history.push('/add-student');
  }
    render() {
    return (
      <div>
<h2 className='text-center'>Student List</h2>
<div className='row'>
<button className='btn btn-primary col-2 my-3'  onClick={this.addStudent}>Add Student</button>
</div>
<div className='row'>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Father Name</th>
                <th>Student Course Name</th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.student.map(
                    students=>
                    <tr key={students.stud_id}>
                     <td>{students.stud_name}</td>
                     <td>{students.stud_email}</td>
                     <td>{students.stud_father_name}</td>
                     <td>{students.stud_coursename}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

</div>
      </div>
    )
  }
}
