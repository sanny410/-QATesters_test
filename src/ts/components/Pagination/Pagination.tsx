import React from 'react';
import './style.scss'

const Pagination =
    ({ itemsPerPage, totalItem, paginate, nextPage,
         prevPage, btnPrevDisabled, btnNextDisabled,
         lastItemIndex, firstItemIndex, setItemsPerPage }:
         {itemsPerPage: number, totalItem: number, paginate: Function,
             nextPage: Function, prevPage: Function, btnPrevDisabled: boolean,
             btnNextDisabled: boolean, lastItemIndex: number,
             firstItemIndex: number, setItemsPerPage: Function }) => {

    const pageNubmers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
        pageNubmers.push(i)
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setItemsPerPage(value);
    }

    return (
        <div>
            <ul className="pagination list-group">
                <li className='counter'>Записи {firstItemIndex + 1} - {lastItemIndex}  </li>
                <li className='ml-3'><button className="btn page_item btn-primary list-group-item" disabled={btnPrevDisabled} onClick={() => prevPage()}>Prev</button></li>
                {
                    pageNubmers.map(number => {
                        return <li className="page_item list-group-item" key={number}>
                            <a href="#" className="page_link" onClick={() => paginate(number)}>{number}</a>
                        </li>
                    })
                }
                <li><button className="btn page_item btn-primary list-group-item" disabled={btnNextDisabled} onClick={() => nextPage()}>Next</button></li>
                <li><span>по </span>
                    <select onChange={selectChange}>
                        <option defaultValue={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span> записей </span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;