import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import '../App/App.css'



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

    handleUpdate = (value) => {
        if(value === "feeling"){
            this.props.history.push('/')
        }
        else if (value === "understanding") {
            this.props.history.push('/understanding')
        }
        else if (value === "support") {
            this.props.history.push('/support')
        }
        else if (value === "comments") {
            this.props.history.push('/comments')
        }
    }

    render() {
        return (
            <div className="Review">
                <h2>Review your Feedback</h2>
                <div className="Review-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feeling</td>
                            <td>{this.props.feedbackReducer.feeling}</td>
                            <td><button onClick={() => this.handleUpdate("feeling")}>Update</button></td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>{this.props.feedbackReducer.understanding}</td>
                            <td><button onClick={() => this.handleUpdate("understanding")}>Update</button></td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>{this.props.feedbackReducer.support}</td>
                            <td><button onClick={() => this.handleUpdate("support")}>Update</button></td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>{this.props.feedbackReducer.comments}</td>
                            <td><button onClick={() => this.handleUpdate("comments")}>Update</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
