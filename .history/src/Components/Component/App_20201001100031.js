import React from 'react';
import Wbnplayer from '../Component/Wbnplayer'
import { BroserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router exact path="/" component="">
        </Switch>
      </Router>
        <Wbnplayer />
    </div>
  );
}

export default App;
