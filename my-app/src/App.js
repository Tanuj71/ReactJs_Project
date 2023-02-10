
import './App.css';
import './component/Navbar'
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
   <>
   <Navbar title="TextUtils" aboutText="About Us"/>
  
  <div className='container'>
  <TextForm heading="Enter the text to analyze"/>
  </div>
  
   </>
  );
}

export default App;
