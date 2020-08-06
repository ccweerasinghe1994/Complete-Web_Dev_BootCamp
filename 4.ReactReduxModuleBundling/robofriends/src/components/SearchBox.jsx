import React from "react";
import '../index.css'
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa3 searchBox'>
            <input style={{ width: '50%',borderRadius:'10px'}} onChange={searchChange} className='pa3 bg-lightest-blue shadow-5' type='serach'
                placeholder='search robots' />
        </div>
    )
}

export default SearchBox;