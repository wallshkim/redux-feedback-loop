import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App/App.css'



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
        this.props.history.push('/review')
    }

    handleBack = () => {
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: '',
        })
        this.props.history.push('/support')
    }

    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <p>Comments?</p>
                <input value={this.state.comments} onChange={this.handleChange}/>

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

export default withRouter(connect(mapReduxStateToProps)(Comments));
