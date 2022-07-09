import React  from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from '../MainPage/MainPage'
import TaskItem from '../Task_list/TaskItem'


function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/task/:id' element={<TaskItem />}/>
        </Routes>
    </div>
  );
}

export default App;
