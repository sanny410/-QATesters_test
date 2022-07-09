import React from 'react';
import './style.scss'

const Header = () => {
    return (
        <header className="header">
           <nav className="header__menu _container">
               <ul className="menu__list">
                   <li className="list__item">Номер / Дата</li>
                   <li className="list__item">Тип задания / Автор</li>
                   <li className="list__item">Аккаунт / Терминал</li>
                   <li className="list__item">Статус</li>
               </ul>
           </nav>
        </header>
    );
};

export default Header;