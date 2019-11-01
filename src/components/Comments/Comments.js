import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log('change made!');
        this.setState({
            comments: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments,
        })
    }

    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <p>Comments?</p>
                <input value={this.state.comments} onChange={this.handleChange}/>

                <div>
                    <Link to="/review"><button onClick={this.handleClick}>Next</button></Link>
                </div>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);
