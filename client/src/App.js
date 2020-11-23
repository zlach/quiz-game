import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './stylesheets/main.scss';
import Landing from './components/pages/Landing';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Home from './components/pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Switch>
            {/* <Route exact path="/manage" component={Login}/> */}
            <PrivateRoute exact path="/home" component={Home}/>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
