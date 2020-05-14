import React from "react";

function Search(props) {
    return (
        <div className="search form-row">
            <div className="offset-3"></div>
            <div className="col-6">
                <input type="text" className="form-control" 
                    name="search"
                    value={props.value}
                    onChange={props.handleInputChange}
                    placeholder="Search employees by name, number or email address"
                    id="search" />
            </div>
            <div className="offset-3"></div>
        </div>
    );
}

export default Search;