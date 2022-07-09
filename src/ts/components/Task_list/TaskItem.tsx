import React  from 'react';
import data from '../../../test_data.json';
import { useParams , Link} from "react-router-dom";
import {ListItemType} from '../../types'

const TaskItem = () => {
    
    const { id } = useParams();
    const idTask = Number (id);

    const task: ListItemType = data.find(item => item.id === idTask) as ListItemType;
    console.log(task)

    const date: string = new Date(task.created_date).toLocaleString();

    return (
        <ul className="task_item list-group">
            <Link className="m-3" to={`/`} >Назад к списку</Link >
            <h3 className="m-3">Заявка номер {task.id}</h3>
            <li className="list-group-item">Статус: {task.status}</li>
            <li className="list-group-item">Тип задания: {task.order_type.name}</li>
            <li className="list-group-item">Терминал: {task.terminal.name}</li>
            <li className="list-group-item">Аккаунт: {task.account.name}</li>
            <li className="list-group-item">Автор: {task.created_user.surname} {task.created_user.name} {task.created_user.patronymic}</li>
            <li className="list-group-item">Дата создания: {date}</li>
        </ul>
    );
};

export default TaskItem;