import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Createstudent from './Components/Createstudent';
import Editstudent from './Components/Editstudent';
import React, { useState } from 'react';
import './App.css';

export const StudentContext = React.createContext();

function App() {

  let [students, useStudents] = useState([
    {
      name: "Raj",
      email: "raj@gmail.com",
      mobile: "3265478",
      batch: "35C"
    },
    {
      name: "Joshva",
      email: "josh@gmail.com",
      mobile: "3265478",
      batch: "65E"
    },
    {
      name: "Victor",
      email: "honey@gmail.com",
      mobile: "3265478",
      batch: "66D"
    },
  ])
  return <>
    <div id='wrapper'>

      <BrowserRouter>
        <Sidebar />
        <StudentContext.Provider value={{ students, useStudents }}>
          <Routes>
            <Route path='dashboard' element={<Dashboard />}>
            </Route>
            <Route path='create-student' element={<Createstudent />} />
            <Route path='edit-student/:ee/:vic' element={<Editstudent />} />
          </Routes>
        </StudentContext.Provider>
      </BrowserRouter>
    </div>
  </>
}

export default App;
