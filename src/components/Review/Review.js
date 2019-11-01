import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Review extends Component {


    render() {
        return (
            <div className="Review">
                <h2>Review your Feedback</h2>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
