import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

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
        if (this.state.support === '') {
            alert('Please enter score before moving on.')
        } else {
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state.support,
            })
            this.props.history.push('/comments')
        }
    }

    render() {
        return (
            <div className="Support">
                <h2>How well are you being supported?</h2>
                <p>Support?</p>
                {/* <input value={this.state.support} onChange={this.handleChange} /> */}
                <select value={this.state.feeling} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div>
                    <button onClick={this.handleClick}>Next</button>
                </div>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(Support));
