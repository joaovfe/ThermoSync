// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/pages/Login/Login'; 
import './App.css';
import NavigationBar from './components/pages/NavigationBar/NavigationBar';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path= '/NavigationBar' element = {<NavigationBar/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
