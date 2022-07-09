import React, {useEffect, useState} from 'react';
import ListItem from './ListItem'
import {List, ListItemType} from '../../types'
import './style.scss'
import '../../../test_data.json';


const TaskList = ({list}: {list: typeof List}) => {
    return (
        <div className="task-list _container">
                {
                    list.map(item => {
                    return <ListItem item={item} key={item.id}/>})
                }
        </div>
    );
};

export default TaskList;