import React from 'react';

import "../../index.css";

import { currentAccount } from '../..';
import { Link } from 'react-router-dom';

class AccountStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = { display: "Sign In" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("Clicked");
        this.setState({ display: "Clicked" })
    }

    toLogin() {
        // navigation.navigate('login')
        console.log("To Login");
    }

    render() {
        if (currentAccount == null) {
            return (<Link to="login">Sign In</Link>);
        }
        return (<div>Already In</div>);
    }
}

export default AccountStatus;