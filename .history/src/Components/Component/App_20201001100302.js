import React from 'react';
import Wbnplayer from '../Component/Wbnplayer'
import { BroserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Wbnplayer} />
          <Route exact path="/:activeVideo" component={Wbnplayer} />
        </Switch>
      </Router>
      <Wbnplayer />
    </div>
  );
}

export default App;
