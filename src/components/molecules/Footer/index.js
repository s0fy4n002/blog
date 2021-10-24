import {ICFacebook, ICInstagram, ICTwitter, ICYoutube, ICDiscord} from '../../../assets';
import './footer.scss';

const Icon = ({img, alt}) => {
    return (
        
            <img src={img} alt={alt} />
        
    )
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-footer">
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="media-sosial">
                    <Icon img={ICFacebook} alt="facebook"/>
                    <Icon img={ICInstagram} alt="instagram"/>
                    <Icon img={ICTwitter} alt="twitter"/>
                    <Icon img={ICDiscord} alt="discord"/>
                    <Icon img={ICYoutube} alt="youtube"/>
                </div>
            </div>
            
            <div className="copyright">
                <p>Copyright 2021</p>
            </div>
        </div>
    )
};

export default Footer;
