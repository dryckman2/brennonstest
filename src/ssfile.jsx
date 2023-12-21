import React from 'react'


class SSFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filename: props.filename, filecontents: props.filecontents };
    }
    render() {
        return (<tr><td><div>{this.state.filename}</div></td></tr>);
    }
}

export default SSFile;