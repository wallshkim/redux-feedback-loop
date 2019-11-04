import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'

import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          <Route exact path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Success} />

          {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        </div>
      </Router>
    );
  }
}


const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
