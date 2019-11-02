import React, { Component } from 'react';

import { HashRouter as withRouter } from 'react-router-dom'
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
        if (this.state.feeling === '') {
            alert('Please enter score before moving on.')
        } else {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state.feeling,
            })
            this.props.history.push('/understanding')
        }
    }

    render() {
        return (
            <div className="Feeling">
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <input value={this.state.feeling} onChange={this.handleChange} />

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

export default withRouter(connect(mapReduxStateToProps)(Feeling));
