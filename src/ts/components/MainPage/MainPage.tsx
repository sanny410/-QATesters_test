import React, {useState, useEffect } from 'react';
import Header from "../Header/Header";
import Pagination from '../Pagination/Pagination'
import TaskList from '../Task_list/TaskList'
import { ListItemType} from '../../types'
import data from '../../../test_data.json';


const MainPage = () => {
    const [list]= useState<ListItemType[]>(data);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [btnPrevDisabled, setbtnPrevDisabled] = useState<boolean>(true);
    const [btnNextDisabled, setbtnNextDisabled] = useState<boolean>(false);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItem = list.slice(firstItemIndex, lastItemIndex);

    useEffect(() => {
        if (currentPage === 1) {
            setbtnPrevDisabled(true)
        } else if (currentPage > 1) {
            setbtnPrevDisabled(false)
        }
        if (currentPage === Math.ceil(list.length / itemsPerPage)) {
            setbtnNextDisabled(true)
        } else if (currentPage < Math.ceil(list.length / itemsPerPage)) {
            setbtnNextDisabled(false)
        }
    }, [currentPage, list.length, itemsPerPage])


    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const nextPage = () => setCurrentPage( prev => prev + 1);
    const prevPage = () => setCurrentPage( prev => prev - 1);

    
    return (
        <div className="main_page">
            <Header />
            <TaskList list={currentItem}/>
            <Pagination itemsPerPage={itemsPerPage}
                        totalItem={list.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        btnPrevDisabled={btnPrevDisabled}
                        btnNextDisabled={btnNextDisabled}
                        firstItemIndex={firstItemIndex}
                        lastItemIndex={lastItemIndex}
                        setItemsPerPage={setItemsPerPage}/>
        </div>
    );
};

export default MainPage;