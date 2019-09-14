import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({postPerpage, totalPost, changedPage, currentPage}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPost / postPerpage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="container my-5">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <Link className="page-link text-dark border-0" to="/">Previous</Link>
                </li>
                    {pageNumbers.map((number) => {
                        return (
                            <li key={number} className={(currentPage === number ? 'active ' : '') + "page-item"}>
                                <Link to="/" className="page-link text-dark border-0" onClick={() => {changedPage(number)}}>
                                    {number}
                                </Link>
                            </li>
                        )
                    })}
                <li className="page-item">
                        <Link className="page-link text-dark border-0" to="/">Next</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;