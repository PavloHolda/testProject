import React from 'react';
import axios from 'axios';

const Pagination = props => {

    const handleClick = () => {
        props.setCurrentPage(props.item)
        getNewData(props.item);
        props.setCountOfComments(2);
    };

    const getNewData = page => {
        const requestUrl = 'https://jordan.ashton.fashion/api/goods/30/comments?page=' + page;
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            props.updateData(response.data);
        }
        fetchData();
    }

    return (
        <li 
            className={props.currentPage === props.item ? "pagination__item active" : "pagination__item"}
            onClick={() => handleClick()}
        >{props.item}</li>
    )
}

export default Pagination;