import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";

import SSFile from "./ssfile.jsx";
import MyDropzone, { FILES } from './dropzone.jsx';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
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

function FilesList() {
  const rows = [];
  if (FILES.length) {
    for (let i = 0; i < FILES.length; i++) {
      rows.push(<SSFile key={i} filename={FILES[i]} filecontent="" />);
    }
  } else {
    rows.push(<tr key={0}><td><div>No Active Files</div></td></tr>);
  }
  return rows;
}


class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = { updater: () => { this.forceUpdate() } }
  }

  render() {
    return (
      <div className="page">
        <div className='fillerTop'></div>
        <table className="spanningTable">
          <tbody>
            <tr>
              <td>
                <MyDropzone updater={this.state.updater} />
              </td>
            </tr>
            <tr>
              <td>
                <SearchBar />
              </td>
            </tr>
            <FilesList />
          </tbody>
        </table>
      </div >
    );
  }
}



// ========================================

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);
