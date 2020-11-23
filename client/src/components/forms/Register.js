import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { removeAlert } from '../../actions/alert';


const Register = props => {
    const [formData, setFormData] = useState({
        code: '',
        email: '',
        password: '',
        password2: ''
    });

    const [alerts, setAlerts] = useState({
        pMatch: '',
    })

    const { code, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlerts({ ...alerts, pMatch: 'is-invalid' });
        } else {
            props.register({ code, email, password });
        }
    }

    const onClick = () => {
        props.removeAlert();
        props.back();
    }

    return (
        <div className="register-form">
            <svg onClick={() => onClick()} width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <form className="pt-2" onSubmit={e => onSubmit(e)}>
                <div className="form-item-height">
                    <input className={"form-control " + (props.error.errType === "code" ? "is-invalid" : "")} required={true} type="password" name="code" value={code} onChange={e => {onChange(e); props.removeAlert()}} placeholder="Secret Code" />
                    <div className="invalid-feedback">
                        Incorrect code
                    </div>
                </div>
                <div className="form-item-height">
                    <input className={"form-control " + (props.error.errType === "email" ? "is-invalid" : "")} required={true} type="email" name="email" value={email} onChange={e => {onChange(e); props.removeAlert()}} placeholder="Email" />
                    <div className="invalid-feedback">
                        Account already exists
                    </div>
                </div>
                <div className="form-item-height">
                    <input className={"form-control " + alerts.pMatch} required={true} type="password" minLength="6" name="password" value={password} onChange={e => { onChange(e); setAlerts({ ...alerts, pMatch: '' }) }} placeholder="Password" />
                    <div className="invalid-feedback">
                        Passwords must match
                    </div>
                </div>
                <div className="form-item-height">
                    <input className={"form-control " + alerts.pMatch} required={true} type="password" minLength="6" name="password2" value={password2} onChange={e => { onChange(e); setAlerts({ ...alerts, pMatch: '' }) }} placeholder="Retype Password" />
                </div>
                <input className="btn custom-submit" type="submit" value="Register" />
            </form>
        </div>
    )
}

Register.propTypes = {
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    removeAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    error: state.alert
})

export default connect(mapStateToProps, { register, removeAlert })(Register);