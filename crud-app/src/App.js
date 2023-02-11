

import './App.css';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Student from './component/Student';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import AddStudent from './component/AddStudent';
function App() {
  return (
    <div>
      <Router>
         <div className='container'>
            <HeaderComponent/>
               <div className="container">
                  <Routes> 
                      <Route exact path="/" element={<Student/>}></Route>
                       <Route exact path="/add-student" element={<AddStudent/>}></Route>
                  </Routes>
       
        
                </div>
       
            <FooterComponent/>
           
          </div>
       </Router>
    </div>
   
  );
}

export default App;
