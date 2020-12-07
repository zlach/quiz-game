import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getGames } from '../../actions/home';
import { postNewGame } from '../../actions/home';
import moment from 'moment';
import SetUp from '../forms/SetUp';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Home = ({ getGames, logout, home, postNewGame }) => {
    useEffect(() => {
        getGames();
    }, [getGames])

    const [dropdownOpen, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const submit = (formData) => {
        postNewGame(formData);
        setEditMode(false);
    };

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
                        <div className="py-3 mt-3 rounded d-flex justify-content-center new-game-display">
                            {/* <button className="cancel-button btn"></button> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="cancel-button bi bi-x-circle-fill"
                                viewBox="0 0 16 16"
                                onClick={() => setEditMode(false)}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.354 4.646a.5.5 0 10-.708.708L7.293 8l-2.647 2.646a.5.5 0 00.708.708L8 8.707l2.646 2.647a.5.5 0 00.708-.708L8.707 8l2.647-2.646a.5.5 0 00-.708-.708L8 7.293 5.354 4.646z"
                                ></path>
                            </svg>
                            <SetUp submit={submit} />
                        </div> :
                        <button className="d-block btn py-3 mt-3 new-game-button" onClick={() => setEditMode(true)}>
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
    home: PropTypes.object,
    postNewGame: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    home: state.home
})

export default connect(mapStateToProps, { getGames, logout, postNewGame })(Home);