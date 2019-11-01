import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Support extends Component {


    state = {
        support: ''
    }

    handleChange = (event) => {
        console.log('change made!');
        this.setState({
            support: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state.support,
        })
    }


    render() {
        return (
            <div className="Support">
                <h2>How well are you being supported?</h2>
                <p>Support?</p>
                <input value={this.state.support} onChange={this.handleChange}/>

                <div>
                    <Link to="/comments"><button onClick={this.handleClick}>Next</button></Link>
                </div>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Support);
