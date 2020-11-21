import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './stylesheets/main.scss';
import Landing from './components/pages/Landing';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing} />
        <Switch>
          {/* <Route exact path="/manage" component={Login}/> */}
        </Switch>
      </Fragment>
    </Router>
  </Provider>


export default App;
