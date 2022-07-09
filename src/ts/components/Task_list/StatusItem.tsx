import React from 'react';
import './style.scss'

const Status = ({status, classStatus } : {status: string, classStatus: string}) => {

        switch (status) {
            case 'new': return <Status status = 'Новое' classStatus={'new'}/>
            case 'completed': return <Status status ='Завершенный' classStatus={'completed'}/>
            case 'assigned_to': return <Status status = 'Назначено' classStatus={'assigned_to'}/>
            case 'started': return <Status status = 'Выполняется' classStatus={'started'}/>
            case 'declined': return <Status status = 'Отменено' classStatus={'declined'}/>
        }

    return (
        <div className={`status_item ${classStatus}`}>
            {status}
        </div>
    );
};

export default Status;