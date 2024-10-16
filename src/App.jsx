// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/pages/Login'; 
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
