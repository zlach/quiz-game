import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getGames } from '../../actions/home';
import moment from 'moment';


const Home = ({ getGames, logout, home }) => {
    useEffect(() => {
        getGames();
    }, [getGames])
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <button onClick={logout} className="btn ml-auto">logout</button>
            </nav>
            {home.games.map((game, i) => {
                return <button className="d-block btn" key={i}>{game.gameName}{" "}{moment(game.date).format('MMMM Do YYYY, h:mm:ss a')}</button>;
            })}
        </div>
    )
}

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