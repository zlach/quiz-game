import { useState } from 'react';

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2){
            console.log('passwords do not match');
        } else{
            console.log(formData);
        }
    }

    return (
        <div style={{ height: '350px', width: "250px" }}>
            <svg onClick={props.back} width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <form onSubmit={e => onSubmit(e)}>
                <input className="form-control" type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="Name" />
                <br />
                <input className="form-control" type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" />
                <br />
                <input className="form-control" type="password" minLength="6" name="password" value={password} onChange={e => onChange(e)} placeholder="Password" />
                <br />
                <input className="form-control" type="password" minLength="6" name="password2" value={password2} onChange={e => onChange(e)} placeholder="Retype Password" />
                <br />
                <input className="btn" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;