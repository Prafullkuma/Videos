import React from 'react';
import Wbnplayer from '../Component/Wbnplayer'
import GlobalStyle from '../Styles/Dq/GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Wbnplayer} />
          <Route exact path="/:activeVideo" component={Wbnplayer} />
        </Switch>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
