import React, {useState, useEffect } from 'react';
import axios from 'axios'
import data from '../../test_data.json';
import Header from "../Header/Header";
import TaskList from '../Task_list/Task_list'
import {List, ListItemType} from '../../types'
import './App.css';


function App() {
    const [list, setList]= useState<ListItemType[]>(data);

  return (
    <div className="App">
        <Header />
        <TaskList list={list}/>
    </div>
  );
}

export default App;
