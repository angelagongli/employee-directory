import React from "react";
import moment from "moment";

function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col" className="sorted" onClick={props.handleSortChange}>
                        Name <i className={"fas fa-caret-" + (props.sortDirection === "asc" ? "up" : "down")}></i> 
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(row => 
                    <tr key={row.name.first + " " + row.name.last}>
                        <td><img src={row.picture.thumbnail} alt={row.name.first + " " + row.name.last} /></td>
                        <td>{row.name.first + " " + row.name.last}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                        <td>{moment(row.dob.date).format("MM/DD/YYYY")}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;