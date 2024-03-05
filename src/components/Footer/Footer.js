import React from 'react';
import './Footer.css';
import logo from '../../media/amazon-logo.png';
import flag from '../../media/india-icon.webp';
import LanguageIcon from '@mui/icons-material/Language';
import FooterColumn from '../FooterColumn/FooterColumn';
import { links } from '../../data/footerLinks';

function Footer() {
  return (
    <div className="footer">
      {/* eslint-disable-next-line  */}
      <a href="#" className="footer__backToTop">
        <p>Back to top</p>
      </a>
      <div className="footer__nav">
        {links.map((item, index) => {
          const { title, links } = item;
          return <FooterColumn key={index} title={title} links={links} />;
        })}
      </div>
      <hr />
      <div className="footer__settings">
        <img src={logo} alt="" />
        <div className="footer__buttons">
          <div className="footer__button">
            <LanguageIcon />
            <p>English</p>
          </div>
          {/* <div className="footer__button">
            <AttachMoneyIcon />
            <p> ₹(Rs.) - Rupay</p>
          </div> */}
          <div className="footer__button">
            <img src={flag} alt="" />
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <ul>
          <li>
            {/* eslint-disable-next-line  */}
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            {/* eslint-disable-next-line  */}
            <a href="#">Privacy Notice</a>
          </li>
          <li>
            {/* eslint-disable-next-line  */}
            <a href="#">Interest-Based Ads</a>
          </li>
          <li>© 1996-2026, Amazon.com, Inc. or its affiliates</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
