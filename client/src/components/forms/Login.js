import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { removeAlert } from '../../actions/alert';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        props.login(email, password);
    }
    const onClick = () => {
        props.removeAlert();
        props.back();
    }

    if (props.isAuthenticated) {
        return <Redirect to="home" />
    }

    return (
        <div className="login-form">
            <svg onClick={() => onClick()} width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-item-height">
                    <input className={"form-control " + (props.error.errType === "email" ? "is-invalid" : "")} type="email" placeholder="Email" name="email" value={email} onChange={e => { onChange(e); props.removeAlert() }} />
                    <div className="invalid-feedback">
                        Email not found
                    </div>
                </div>
                <div className="form-item-height">
                    <input className={"form-control " + (props.error.errType === "password" ? "is-invalid" : "")} minLength="6" type="password" placeholder="Password" name="password" value={password} onChange={e => { onChange(e); props.removeAlert() }} />
                    <div className="invalid-feedback">
                        Incorrect Password
                    </div>
                </div>
                <input className="btn custom-submit" type="submit" value="Log In" />
            </form>
        </div>
    )
}

Login.propTypes = {
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    removeAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    error: state.alert,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login, removeAlert })(Login);