import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    // Mobile Menu State
    const [sidenav, setSidenav] = useState(false);

    // Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);

    // Mobile Icon
    // const menuIcon = <FontAwesomeIcon icon={faBars} />

    // Toggle menu icons
    const menuIcon = sidenav ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />

    // SideNav
    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    // Scroll Fixed Navbar
    useEffect(()=>{
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header id='site_header' className={`${sticky ? "sticky" : ''}`}>
            <div className='container'>
                <nav className='navbar' id='Navbar'>
                    <div className='navbar_brand'>
                        <a href='/'>
                            <img src="/logo/logo.png" alt="Logo" />
                        </a>
                    </div>
                    <div className='navbar_toggler' onClick={sidenavShow}>
                        {menuIcon}
                    </div>
                    <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/entertainment" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    Entertainment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    News
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidenav(false)}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>
        </>
        
    )
}
