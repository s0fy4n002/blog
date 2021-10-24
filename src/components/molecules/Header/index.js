import './header.scss';
import { useHistory } from 'react-router-dom';
import {Button} from '../../../components'

const Header = () => {
    const history = useHistory();
    return (
        <div className="main-nav">
            <Button title="MERN Blog" className="logo" onClick={()=>history.push('/')} />
            <Button title="Keluar" className="keluar" onClick={()=>history.push('/login')} />
        </div>
    )
}

export default Header
