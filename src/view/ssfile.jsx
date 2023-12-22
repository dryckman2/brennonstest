import React from 'react'


function SSFile(props) {
    return (<tr>
        <td width={"10%"}>{props.filename}</td>
        <td>{props.preview}</td>
    </tr>);

}

export default SSFile;