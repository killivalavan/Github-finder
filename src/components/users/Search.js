import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({showClear, clearUsers, searchUsers, setAlert}) => {

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        if (text === ''){
            setAlert(' Please type the user', 'danger');
        }else{
            searchUsers(text);
            setText('');
        }
    }

    const onChange = e => setText(e.target.value);

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input onChange={onChange} name="text"  type="text" placeholder="Search Users..." value={text}/>
                    <input type="submit" value="Search" className="btn btn-block btn-dark"/>
                </form>
                {showClear && <button onClick={clearUsers} type="submit" className="btn btn-block btn-light">Clear</button>}
                
            </div>
        )
}


Search.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired
}

export default Search
