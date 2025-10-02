import React, {useState, useEffect} from 'react';
import './Footer.css';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    // Icons
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />

    // State
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (windowScroll > heightToHidden) ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            <footer className='footer'>
                <div className='container footer-content'>

                    {/* Brand Info */}

                    <div className='footer-brand'>
                        <img src={Logo} alt='Logo' className='footer-logo'/>
                        <p>
                            DonwizzyStudio brings you premium entertainment, creative ideas, and inspiring content. <br />
                            Stay connected and enjoy the vibe.
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div className='footer-links'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/entertainment'>Entertainment</a></li>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}

                    <div className='footer-contact'>
                        <h4>Contact</h4>
                        <p>Email: info@jcodestudio.com</p>
                        <p>Phone: +234 801 234 5678</p>
                        <p>Lagos, Nigeria</p>
                    </div>

                    {/* Social Media */}

                    <div className='footer-social'>
                        <h4>Follow Us</h4>
                        <div className='social-icons'>
                            <a href='/' target='_blank'><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href='/' target='_blank'><FontAwesomeIcon icon={faXTwitter}/></a>
                            <a href='/' target='_blank'><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href='/' target='_blank'><FontAwesomeIcon icon={faYoutube}/></a>
                            <a href='/' target='_blank'><FontAwesomeIcon icon={faTiktok}/></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}

                <div className='footer-copy'>
                    <p>© {new Date().getFullYear()} All Right Reserved | Designed By <a href="/">J.CodeStudio</a></p> 
                </div>
            </footer>
                

            {/* Scroll To Top */}
            {
                isVisible && (
                    <div className="scroll_top" onClick={scrollToTop}>
                        {faArrowUpIcon}
                    </div>
                )
            } 
        </>
    )
}
