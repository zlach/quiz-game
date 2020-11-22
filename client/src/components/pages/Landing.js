import { Link } from 'react-router-dom';
import Code from '../forms/Code';
import Login from '../forms/Login';
import Register from '../forms/Register';
import { useState } from 'react';
import Alert from '../alerts/Alert';


const Landing = () => {
    const [isCode, setIsCode] = useState(true);
    const [formType, setFormType] = useState('code');

    const renderSwitch = () => {
        switch (formType) {
            case 'code':
                return <Code />;
            case 'login':
                return <Login back={() => { setIsCode(true); setFormType('code') }} />;
            case 'register':
                return <Register back={() => { setIsCode(true); setFormType('code') }} />;
            default:
                return <Code />;
        }
    }

    return (
        <section className="landing">
            <div className="container">
                <div className="row alert-container justify-content-center align-items-end">
                    {/* <Alert/> */}
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="content-container" style={{ height: isCode ? '330px' : '430px', borderRadius: isCode ? '50%' : '20px' }}>
                        <div className="content-layover d-flex align-items-center justify-content-center" style={{ height: isCode ? '330px' : '430px', borderRadius: isCode ? '50%' : '20px' }}>
                            {renderSwitch()}
                        </div>
                    </div>
                    <div className="magic-container" style={{ height: isCode ? '350px' : '450px', borderRadius: isCode ? '50%' : '20px' }}></div>
                </div>
                <div className="row justify-content-center pt-5">
                    <div className="manager" style={{ display: isCode ? 'block' : 'none' }}>
                        click to{" "}
                        <span className="here" onClick={() => { setIsCode(false); setFormType('login') }}>log in</span>
                        {" "}or{" "}
                        <span className="here" onClick={() => { setIsCode(false); setFormType('register') }}>register</span>
                    </div>
                </div>
            </div>
            <div className="zach">created by zach goldberg</div>
        </section>
    )
}

export default Landing;