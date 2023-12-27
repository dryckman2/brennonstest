import React from 'react'
import "../index.css";

import MyDropzone, { filterFiles } from './components/dropzone.jsx';


let searchString = "";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', updater: this.props.updater };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        searchString = event.target.value;
        this.setState({ value: event.target.value });
        this.state.updater();
    }

    handleSubmit(event) {
        this.state.updater();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="SearchBar">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function FilesList(props) {
    let filtered = filterFiles(props.filter);
    if (filtered.length === 0) {
        return [<tr key={0}><td><div>No Active Files</div></td></tr>];
    } else {
        return filtered.map((n) => { return n.toReact(props.filter) });
    }
}


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { updater: () => { this.forceUpdate() } }
    }

    render() {
        return (
            <div className="page">
                <table className="spanningTable">
                    <tbody>
                        <tr>
                            <td colSpan={"100%"}>
                                <MyDropzone updater={this.state.updater} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={"100%"}>
                                <SearchBar updater={this.state.updater} />
                            </td>
                        </tr>
                        <FilesList filter={searchString} />
                    </tbody>
                </table>
            </div >
        );
    }
}
