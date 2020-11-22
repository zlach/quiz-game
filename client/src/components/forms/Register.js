import { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert, removeAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../alerts/Alert';
import { STATES } from 'mongoose';

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
            // props.removeAlert();
            // props.setAlert('Passwords do not match', 'red-alert');
        } else {
            console.log(formData);
        }
    }

    const onClick = () => {
        props.removeAlert();
        props.back();
    }

    return (
        <div style={{ height: '360px', width: "250px" }}>
            <svg onClick={() => onClick()} width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <form className="pt-2" onSubmit={e => onSubmit(e)}>
                <div style={{ height: '65px' }}>
                    <input className="form-control" required={true} type="text" name="code" value={code} onChange={e => onChange(e)} placeholder="Secret Code" />
                </div>
                <div style={{ height: '65px' }}>
                    <input className="form-control" required={true} type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" />
                </div>
                <div style={{ height: '65px' }}>
                    <input className={"form-control " + alerts.pMatch} required={true} type="password" minLength="6" name="password" value={password} onChange={e => { onChange(e); setAlerts({ ...alerts, pMatch: '' }) }} placeholder="Password" />
                    <div class="invalid-feedback">
                        Passwords must match
                    </div>
                </div>
                <div style={{ height: '65px' }}>
                    <input className={"form-control " + alerts.pMatch} required={true} type="password" minLength="6" name="password2" value={password2} onChange={e => { onChange(e); setAlerts({ ...alerts, pMatch: '' }) }} placeholder="Retype Password" />
                </div>
                <input className="btn custom-submit" type="submit" value="Register" />
            </form>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    removeAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert, removeAlert })(Register);