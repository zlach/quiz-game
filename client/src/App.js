import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './stylesheets/main.scss';
import Landing from './components/pages/Landing';

const App = () =>
  <Router>
    <Fragment>
      <Route exact path="/" component={Landing}/>
      <Switch>
        {/* <Route exact path="/manage" component={Login}/> */}
      </Switch>
    </Fragment>
  </Router>


export default App;
