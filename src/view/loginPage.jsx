import React from 'react';

import { Error } from './components/errormessage';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "none",
            errorMessage: "",
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    handleSubmit(event) {
        if (this.state.email === "") { // TODO: Replace with email validation
            this.setState({ error: "Error", errorMessage: "Invalid Email Submitted" })
        } else if (this.state.password === "") { // TODO: Replace with password validation
            this.setState({ error: "Error", errorMessage: "Invalid Password Submitted" })
        } else {
            this.setState({ error: "Warning", errorMessage: "Login Not Implemented" })
            console.log(this.state.email + ":  " + this.state.password)
        }
        event.preventDefault();
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
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
                        <td colSpan={"100%"} align='center' className='shadowless'><Error level={this.state.error} message={this.state.errorMessage} /></td>
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
                                <input value={this.state.password} onChange={this.handlePasswordChange} type="password" />
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

                </tbody>
            </table>
        </div>);
    }
}