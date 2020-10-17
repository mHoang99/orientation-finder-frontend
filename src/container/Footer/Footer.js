import React from 'react';
import cssClasses from './Footer.module.css';
import cssCustom from './Footer.css';
import footerBg from '../../assets/bg/footer-bg.svg';
import logo from '../../assets/icons/logo.png';
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className={cssClasses.Footer} style={{ backgroundImage: `url(${footerBg})` }}>
                <Row className='footer'>
                    <Col span='7' style={{ paddingTop: '15px' }}><img src={logo} /></Col>
                    <Col span='11'>
                        <div><span>Address: </span> 1 Dai Co Viet Road, Ha Noi, Viet Nam</div>
                        <div><span>Email: </span> contact@esc.net</div>
                        <div><span>Phone: </span> 043 869 2222</div>
                    </Col>
                    <Col span='5'>
                        <div className="icons-list">
                            <IconFont type="icon-github" />
                            <IconFont type="icon-facebook" />
                            <IconFont type="icon-twitter" />
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Footer;