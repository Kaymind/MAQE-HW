import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({postPerpage, totalPost, changedPage, currentPage, nextPage, prevPage}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPost / postPerpage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="container my-5">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <Link className="page-link text-dark border-0" to="" onClick={() => prevPage(currentPage)}>Previous</Link>
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
                        <Link className="page-link text-dark border-0" to="" onClick={() => nextPage(currentPage,pageNumbers.length)}>Next</Link>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    postPerpage: PropTypes.number.isRequired,
    totalPost: PropTypes.number.isRequired,
    changedPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
}

export default Pagination;