import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Support extends Component {

    render() {
        return (
            <div className="Support">
                <h2>How well are you being supported?</h2>
                <p>Support?</p>
                <input />

                <div>
                    <Link to="/comments"><button>Next</button></Link>
                </div>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Support);
