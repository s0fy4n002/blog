import React from 'react'
import './register.scss';
import {RegisterBg} from '../../assets'
import {Input, Button, Gap} from '../../components'
import { useHistory } from 'react-router-dom';


const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="register-bg"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={10}/>
                <Input label="Full Name" placeholder="Full Name" name="fullName"/>
                <Gap height={10}/>
                <Input label="Email" placeholder="Email" name="email"/>
                <Gap height={10}/>
                <Input label="Password" placeholder="Password" name="password" type="password"/>
                <Gap height={30}/>
                <Button title="Register" name="register" className="button" />
                <Gap height={20}/>
                
                <div className="area-login">
                    <Button title="Kembali ke Login" className="login" onClick={() => history.push('/login')} />
                </div>
            </div>
        </div>
    )
}

export default Register
