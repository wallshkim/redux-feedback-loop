import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
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


    render() {
        return (
            <div className="Understanding">
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <input value={this.state.understanding} onChange={this.handleChange} />


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

export default withRouter(connect(mapReduxStateToProps)(Understanding));
