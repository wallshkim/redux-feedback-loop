import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class Review extends Component {

    submitFeedback = () => {
        axios.post('/feedback', this.props.feedbackReducer)
            .then(() => {
                console.log('Submitted feedback: ', this.props.feedbackReducer);
            })
            .catch((error) => {
                console.log('Error on POST: ', error);
                alert('Sorry cannot submit feedback at this time.')
            })
        this.props.history.push('/success')
    }

    render() {
        return (
            <div className="Review">
                <h2>Review your Feedback</h2>
                <ul>
                    <li>
                        Feeling: {this.props.feedbackReducer.feeling}
                    </li>
                    <li>
                        Understanding: {this.props.feedbackReducer.understanding}
                    </li>
                    <li>
                        Support: {this.props.feedbackReducer.support}
                    </li>
                    <li>
                        Comments: {this.props.feedbackReducer.comments}
                    </li>
                </ul>

                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
