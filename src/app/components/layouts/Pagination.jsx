import React from 'react';
import classes from "./Pagination.module.css"

function Pagination({ products, totalPage, paginate }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPage / products); i++) {
        pageNumber.push(i)
    }
    return (
        <nav aria-label="Pagination">
            <ul className="flex justify-center m-11">
                {pageNumber.map(number => (
                    <li key={number}>
                        <a className="bg-white m-4 border-2 border-black items-center px-3 py-2 text-2xl" onClick={() => paginate(number)} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination
