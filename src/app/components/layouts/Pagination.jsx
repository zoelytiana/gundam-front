import React from 'react';
import classes from "./Pagination.module.css"

function Pagination({ products, totalPage, paginate }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPage / products); i++) {
        pageNumber.push(i)
    }
    return (
        <nav className={classes.paginationConteiner}>
            <ul>
                {pageNumber.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination
