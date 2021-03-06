import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Search from './Pages/Search'
import Mine from './Pages/Mine'
import Count from './Pages/Count'
import Nav from './Components/Nav'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/search" component={ Search } />
            <Route path="/mine" component={ Mine } />
            <Route path="/count" component={ Count } />
          </Switch>
          </div>
      </Router>
          );
  }
}

export default App;
