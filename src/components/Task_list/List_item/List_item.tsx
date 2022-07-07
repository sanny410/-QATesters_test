import React from 'react';
import Status from '../Status';
import {List, ListItemType} from '../../../types'
import '../style.scss'

const ListItem = ({item} : {item: ListItemType}) => {

    const date: string = new Date(item.created_date).toLocaleString()

    return (
        <div className="list__item">
            <div>
                <div className="col-1">№ {item.id}</div>
                <div className="col-2">{date}</div>
            </div>
            <div>
                <div className="col-1">{item.order_type.name}</div>
                <div className="col-2">{item.created_user.surname} {item.created_user.name.slice(0,1)}. {item.created_user.patronymic.slice(0,1)}.</div>
            </div>
            <div>
                <div className="col-1">{item.account.name}</div>
                <div className="col-2">{item.terminal.name}</div>
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