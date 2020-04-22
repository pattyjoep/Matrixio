import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "./components/NavBar"
import StudentList from "./components/StudentList"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <StudentList></StudentList>
    </div>
  );
}

export default App;
