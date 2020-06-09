import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa3'>
            <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type='serach'
                   placeholder='search robots'/>
        </div>
    )
}

export default SearchBox;