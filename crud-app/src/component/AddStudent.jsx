import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class AddStudent extends Component {
  constructor(props){
         super(props)
              this.state={
                stud_name:"",
                 stud_email:"",
                 stud_father_name:"",
                stud_coursename:""

             }
             this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
             this.changeEmailNameHandler=this.changeEmailNameHandler.bind(this);
             this.saveStudent=this.saveStudent.bind(this)
     }
     saveStudent=(e)=>{
        e.preventDefault();
        let student={stud_name:this.state.stud_name, stud_email:this.state.stud_email,stud_father_name:this.state.stud_father_name, stud_coursename:this.state.stud_coursename}
        StudentService.addStudent(student).then(res=>{
this.props.history.push('/')
        });
        console.log('student=>'+JSON.stringify(student)) 
    }
changeFirstNameHandler=(event)=>{
   this.setState({stud_name:event.target.value});
}
changeEmailNameHandler=(event)=>{
    this.setState({stud_email:event.target.value});
 }
 changeFatherNameHandler=(event)=>{
    this.setState({stud_father_name:event.target.value});
 }
 changeCourseNameHandler=(event)=>{
    this.setState({ stud_coursename:event.target.value});
 }
  cancel(){
    this.props.history.push('/')
  }
    render() {
    return (
      <div>
      <div className='container'>
         <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3 my-3'>
                <h3 className='text-center'>Add Student</h3>
                <div className='card-body '>
                    <form>
                        <div className='form-group'>
                            <label >Student Name</label>
                            <input placeholder='Name' name='StudentName' className='form-control' value={this
                            .stud_name} onChange={this.changeFirstNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label >Student Email</label>
                            <input placeholder='email' name='StudentName' className='form-control' value={this
                            .stud_email} onChange={this.changeEmailNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label >Student Father Name</label>
                            <input placeholder='Father Name' name='StudentName' className='form-control' value={this
                            .stud_father_name} onChange={this.changeFatherNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label >Student Course Name</label>
                            <input placeholder='Course Name' name='StudentName' className='form-control' value={this
                            .stud_coursename} onChange={this.changeCourseNameHandler} />
                        </div>
                        <button className='btn btn-success' onClick={this.saveStudent}>Save</button>
                        <button className='btn btn-danger my-2' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                    
                    </form>
                </div>
            </div>
          </div>

      </div>
      </div>
    )
  }
}
