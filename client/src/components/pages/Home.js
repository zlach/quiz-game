import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {getGames} from '../../actions/home';

const Home = (props) =>
    <div>
        {console.log(props.home)}
        <button onClick={props.logout}>logout</button>
    </div>

Home.prototype = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getGames: PropTypes.func.isRequired,
    home: PropTypes.object
}

const mapStateToProps = state => ({
    auth: state.auth,
    home: state.home
})

export default connect(mapStateToProps, { getGames, logout })(Home);