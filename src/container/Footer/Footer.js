import React from 'react';
import cssClasses from './Footer.module.css';
import footerBg from '../../assets/bg/footer-bg.svg';

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className={cssClasses.Footer} style={{ backgroundImage: `url(${footerBg})` }}>
                FOOTER</div>
        </React.Fragment>
    );
}

export default Footer;