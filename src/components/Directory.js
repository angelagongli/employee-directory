import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Table from "./Table";
import Search from "./Search";
import API from "../utils/API";
import "./style.css";

class Directory extends Component {
    state = {
        search: "",
        results: [],
        tableData: [],
        sortDirection: "asc"
    }

    sortTable = (data) => {
        return data.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return this.state.sortDirection === "asc" ? -1 : 1;
            } else if (a.name.last === b.name.last &&
                        a.name.first < b.name.first) {
                return this.state.sortDirection === "asc" ? -1 : 1;
            } else {
                return this.state.sortDirection === "asc" ? 1 : -1;
            }
        });
    }

    componentDidMount() {
        API.search().then(response => {
            this.setState({
                results: response.data.results,
                tableData: this.sortTable(response.data.results)
            })        
        }).catch(error => {
            console.log(error);
        })

    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            let filtered = this.state.results.filter(element => {
                if (element.name.first.includes(this.state.search) ||
                    element.name.last.includes(this.state.search) ||
                    element.phone.includes(this.state.search) ||
                    element.email.includes(this.state.search)) {
                        return true;
                    } else {
                        return false;
                    }
            });
            this.setState({ tableData: this.sortTable(filtered) });
        });
    };

    handleSortChange = () => {
        this.setState({ sortDirection: this.state.sortDirection === "asc" ? "desc" : "asc" }, () => {
            this.setState({ tableData: this.sortTable(this.state.tableData) });
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Jumbotron />
                <div className="container">
                    <h2><i className="fas fa-user"></i><br />Employee Directory</h2>
                    <Search
                        value={this.state.search}
                        handleInputChange={this.handleInputChange} />
                    <Table
                        data={this.state.tableData} 
                        sortDirection={this.state.sortDirection}
                        handleSortChange={this.handleSortChange} />
                </div>
            </div>
        );
    }
}

export default Directory;