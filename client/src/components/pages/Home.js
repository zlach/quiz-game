import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getGames } from '../../actions/home';
import moment from 'moment';
import Rounds from '../forms/Rounds';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Home = ({ getGames, logout, home }) => {
    useEffect(() => {
        getGames();
    }, [getGames])

    const [dropdownOpen, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div className="home-page">
            <nav className="navbar home-secondary">
                <ButtonDropdown className="ml-auto dropdown-menu-right" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Menu
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={logout}>logout</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </nav>
            <div className="container">
                <div className="row flex-column">
                    {editMode ?
                        <div style={{ border: '2px solid #e7e6e9', color: '#130c25' }} className="py-3 mt-3 rounded d-flex justify-content-center">
                            <Rounds/>
                        </div> :
                        <button style={{ border: '2px solid #e7e6e9', color: '#130c25' }} className="d-block btn py-3 mt-3" onClick={() => setEditMode(true)}>
                            <strong>New Game</strong>
                        </button>}
                </div>
                <div className="row flex-column">
                    {home.games.map((game, i) => {
                        return <button className="d-block btn py-3 mt-3 home-secondary" key={i}><strong>{game.gameName}</strong><br />{moment(game.date).format('MMMM Do YYYY, h:mm:ss a')}</button>;
                    })}
                </div>
            </div>
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