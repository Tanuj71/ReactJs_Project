import axios from 'axios'

const STUDENT_API_BASE_URL="http://localhost:8080/api/get";
const STUDENTADD_API_BASE_URL="http://localhost:8080/api/add"
class StudentService{
    getStudent(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(STUDENTADD_API_BASE_URL,student)
    }
}
export default new StudentService()