import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Search from './Pages/Search'
import Mine from './Pages/Mine'
import Count from './Pages/Count'
import Nav from './Components/Nav'
// import Counter from './Components/Counter'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/Mine" component={Mine} />
            <Route path="/Count" component={Count} />
          </Switch>
          </Nav>
          </div>
      </Router>
          );
  }
}


export default App;
