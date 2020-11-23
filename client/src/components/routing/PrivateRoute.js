import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route {...rest} render={
        props => loading ? (
            <div></div>//todo: style spinner or fix so that this isn't necessary
        ) : isAuthenticated ? (
            <Component {...props} />
        ) : (<Redirect to="/" />)
    } />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);