import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App/App.css'



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

                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(Feeling));
