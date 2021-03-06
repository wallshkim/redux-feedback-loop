import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App/App.css'



class Success extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="Success">
                <h1>Thank You!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(Success));
