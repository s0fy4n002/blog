import {LoginBg} from '../../assets'
import {Input, Button, Gap} from '../../components'
import { useHistory } from 'react-router-dom'

import './login.scss'
const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
        <div className="left">
            <img src={LoginBg} alt="login-bg"/>
        </div>
        <div className="right">
            <p className="title">Login</p>
            <Gap height={10}/>
            <Input label="Email" placeholder="Email" name="email"/>
            <Gap height={10}/>
            <Input label="Password" placeholder="Password" name="password" type="password"/>
            <Gap height={30}/>
            <Button title="Login" name="login" className="button" onClick={() => history.push('/')} />
            <Gap height={20}/>
            <div className="area-daftar">
                <Button title="Kembali ke daftar" className="daftar" onClick={() => history.push('/register')} />
            </div>
        </div>
    </div>
    )
}

export default Login
