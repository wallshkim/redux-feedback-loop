import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Comments extends Component {


    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <p>Comments?</p>
                <input />

                <div>
                    <Link to="/review"><button>Next</button></Link>
                </div>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);
