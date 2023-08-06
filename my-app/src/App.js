import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home';
import { Input } from './Pages/input';
import { Result } from './Pages/result';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(0);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/input' element={<Input setName={setName} />} />
        <Route path='/result' element={<Result name={name} />} />
      </Routes>
    </>
  );
}

export default App;
