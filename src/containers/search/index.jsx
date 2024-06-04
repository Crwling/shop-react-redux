import React, { useState } from 'react'

import { searchPhone } from '../../reducers/phones/thunk' 
import { useDispatch } from 'react-redux'
import { Search as SearchIcon } from "react-feather"

const Search = () => {

    const [state, setState] = useState("")
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.preventDefault(); TypeError: e.preventDefault is not a function
        dispatch(searchPhone(state))
    }


    return (
        <div className='well blosd'>
            <h3 className='lead'>Quick shop</h3>
            <form 
                className='input-group d-flex' 
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleChange}
                    type='text'
                    className='form-control'
                />
                <button className='btn btn-default'>
                    <SearchIcon size="25" />
                </button>
            </form>
        </div>
    )
}

export default Search