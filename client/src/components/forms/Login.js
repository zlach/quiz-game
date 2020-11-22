import { useState } from 'react';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { name, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div style={{ height: '350px', width: "250px" }}>
            <svg onClick={props.back} width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <form onSubmit={e => onSubmit(e)}>
                <input className="form-control" type="email" placeholder="Email" name="email" value={name} onChange={e => onChange(e)} />
                <br />
                <input className="form-control" minLength="6" type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
                <br />
                <input className="btn custom-submit" type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default Login;