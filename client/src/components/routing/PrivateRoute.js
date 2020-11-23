import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// todo: clean this up somehow
const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route {...rest} render={
        props => loading && !localStorage.token ? (<div>404</div>)
            : loading ? (<div></div>)
                : isAuthenticated ? (<Component {...props} />)
                    : (<Redirect to="/" />)
    } />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);