import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App/App.css'


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
        if (this.state.understanding === '') {
            alert('Please enter score before moving on.')
        } else {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state.understanding,
            })
            this.props.history.push('/support')
        }
    }

    handleBack = () => {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: '',
        })
        this.props.history.push('/')
    }


    render() {
        return (
            <div className="Understanding">
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <select value={this.state.understanding} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div>
                    <button onClick={this.handleBack}>Back</button>
                    <button onClick={this.handleClick}>Next</button>
                </div>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(Understanding));
