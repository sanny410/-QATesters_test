import React from 'react';
import { Link } from "react-router-dom";
import Status from './StatusItem';
import {List, ListItemType} from '../../types'
import './style.scss'

const ListItem = ({item} : {item: ListItemType}) => {

    const date: string = new Date(item.created_date).toLocaleString();

    if(item.account.name.length >= 25) {
        item.account.name = item.account.name.slice(0, 25) + '...'
    }

    if(item.terminal.name.length >= 25) {
        item.terminal.name = item.terminal.name.slice(0, 25) + '...'
    }

    if(item.order_type.name.length >= 27) {
        item.order_type.name = item.order_type.name.slice(0, 27) + '...'
    }

    return (
        <div className="list__item">
            <div>
                <div className="column-1"><Link to={`/task/${item.id}`}>№ {item.id}</Link></div>
                <div className="column-2">{date}</div>
            </div>
            <div>
                <div className="column-1">{item.order_type.name}</div>
                <div className="column-2">{item.created_user.surname} {item.created_user.name.slice(0,1)}. {item.created_user.patronymic.slice(0,1)}.</div>
            </div>
            <div>
                <div className="column-1">{item.account.name}</div>
                <div className="column-2">{item.terminal.name}</div>
            </div>
            <div>
                <div className="status">
                    <Status status={item.status} classStatus={item.status}/>
                </div>
            </div>
        </div>
    );
};

export default ListItem;