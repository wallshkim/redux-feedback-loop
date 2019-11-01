import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleChange = (event) => {
        console.log('change made!');
        this.setState({
            understanding: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding,
        })
    }


    render() {
        return (
            <div className="Understanding">
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <input />


                <div>
                    <Link to="/support"><button>Next</button></Link>
                </div>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);
