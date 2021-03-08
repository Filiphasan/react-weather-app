import React from 'react'
import './Search.css'

const Search = ({ city, setCity, onClickHandler }) => {
    return (
        <div className="container">
            <div className="search-bar">
                <i className="fas fa-search-location icon"></i>
                <input type="text" value={city} onChange={e => setCity(e.target.value)} className="input" placeholder="Search by City" />
                <button type="submit" onClick={onClickHandler} className="btn-search">
                    <i className="fas fa-search-location"></i>
                </button>
            </div>
        </div>
    )
}

export default Search
