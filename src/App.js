import './App.css';
import {Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import Home from './pages/Home';
import Job from './pages/Job'
import Error from './pages/Error';
import Create from './pages/Create';
import Notes from './pages/Notes';

function App() {
  const [notes, setNotes] = useState([])
  return (
      <>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/job/:id' element={<Job />}/>
          <Route exact path='/create' element={<Create setNotes={setNotes}/>}/>
          <Route exact path='/notes' element={<Notes notes={notes}/>}/>
          <Route path = "*" element={<Error/>}/>
       </Routes>
      </>
  );
}

export default App;
