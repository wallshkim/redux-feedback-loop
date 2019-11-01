import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = (event) => {
        console.log('change made!');
        this.setState({
            feeling: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling,
        })
    }

    render() {
        return (
            <div className="Feeling">
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <input value={this.state.feelingIn} onChange={this.handleChange}/>

                <div>
                    <Link to="/understanding"><button onClick={this.handleClick}>Next</button></Link>
                </div>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Feeling);
