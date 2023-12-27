import React from 'react';

import { Error } from './components/errormessage';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "none",
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    handleSubmit(event) {
        this.setState({ error: "Error" })
        console.log(this.state.error)
        event.preventDefault();
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.error)
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }


    render() {
        return (<div>
            <table align='center' className='shadowless'>
                <tbody>
                    <tr>
                        <td width={"100%"} colSpan={"100%"} className='spacer'></td>
                    </tr>
                    <tr>
                        <td className='shadowless'>
                            Email:
                        </td>
                        <td className='shadowless'>
                            <form onSubmit={this.handleSubmit} id="Email">
                                <input value={this.state.email} onChange={this.handleEmailChange} type="text" />
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td className='shadowless'>
                            Password:
                        </td>
                        <td className='shadowless'>
                            <form onSubmit={this.handleSubmit} id="Password" >
                                <input value={this.state.password} onChange={this.handlePasswordChange} type="text" />
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"100%"} align='center' className='shadowless'>
                            <form onSubmit={this.handleSubmit} id="Submit">
                                <input type="submit" value="Submit" />
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"100%"} align='center' className='shadowless'><Error level={this.state.error} message={"Test Message"} /></td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}