
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FacebookLogin from './component/Login/FacebookLogin';
import GoogleLogin from './component/Login/GoogleLogin';
import Login from './component/Login/Login';


function App() {


  
  return (
    <div className="App">
    <BrowserRouter>
        
          <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/button' element={<FacebookLogin />} />
          <Route path='/google' element={<GoogleLogin />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
