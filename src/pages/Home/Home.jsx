import React from 'react'
import './Home.css';
import BannerImage from '../../assets/banner/banner-img2.jpg';
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur/css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFilm, faLaugh, faChartBar, faCoins, faMarker } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    // const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    // const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    // const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />
    const faMusicIcon = <FontAwesomeIcon icon={faMusic} />
    const faFilmIcon = <FontAwesomeIcon icon={faFilm} />
    const faLaughIcon = <FontAwesomeIcon icon={faLaugh} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />

    return (
        <>

                {/* HERO SECTION */}

            <section id="home">
                <div className='banner_image'></div>
                <div className='container'>
                    <div className='banner_outer'>
                        <div className="col">
                            <h3 className="title">
                                EXPERIENCE THE <span>BEST OF ENTERTAINMENT</span>
                            </h3>
                            <p>From movies to music to comedy, we bring you thrilling updates, exclusive content, and services that keep you informed and entertained</p>
                            <div className="btn_wrapper">
                                <Link to='/entertainment' className='btn'>Explore Now</Link>
                                {/* <a className="btn" href="/">Explore Now</a> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="sub_banner_image">
                                {/* <LazyLoadImage/> */}
                                <img src={BannerImage} alt="Banner_image" loading='lazy'/>
                            </div>

                            {/* Floating Icons */}
                            <div className='floating-icons'>
                                <a href='/services' className="banner_style_1">
                                    {faChartBarIcon}
                                    <h4>Business Strategy</h4>
                                </a>
                                <a href='/services' className="banner_style_1 banner_style_2">
                                    {faCoinsIcon}
                                    <h4>Solution Focused</h4>
                                </a>
                                <a href='/services' className="banner_style_1 banner_style_3">
                                    {faMarkerIcon}
                                    <h4>Decision Maker</h4>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ENTERTAINMENT HIGHLIGHTS SECTION */}

            <section className='entertainment_highlights'>
                <div className='container'>
                    <h2>Entertainment Highlights</h2>
                    <p className='section_text'>
                        Dive into the world of fun and creativity. Stay updated with the trending movies, hottest music, and comedy that makes you laugh out loud.
                    </p>
                    <div className='grid'>
                        <div className='card'>
                            {faFilmIcon}
                            <h4>Movies</h4>
                            <p>Get the latest on Nollywood, Hollywood, and blockbuster films.</p>
                        </div>
                        <div className='card'>
                            {faMusicIcon}
                            <h4>Music</h4>
                            <p>From Afrobeats to international hits, explore trending songs and artists.</p>
                        </div>
                        <div className='card'>
                            {faLaughIcon}
                            <h4>Comedy</h4>
                            <p>Enjoy hilarious skits, stand-up shows, and trending comedy clips.</p>
                        </div>
                    </div>
                    <div className='btn_wrapper'>
                        <a href='/entertainment' className='btn'>Discover More</a>
                    </div>
                </div>
            </section>


            {/* ABOUT PREVIEW SECTION */}

            <section className='about_preview'>
                <div className='container'>
                    <h2>About Us</h2>
                    <p>
                        We are a digital platform dedicated to entertainment, business promotions, and lifestyle content. <br />
                        Our mission is to connect people with engaging stories, creative talent, and unique services that inspire and inform.
                    </p>
                    <a href='/about' className='btn-animate'>Learn More</a>
                </div>
            </section>


            {/* SERVICE PREVIEW SECTION */}

            {/* <section className='services_preview'>
                <div className='container'>
                    <h2>Our Services</h2>
                    <div className='grid'>
                        <div className='service_card'>
                            <h4>Promotions</h4>
                            <p>Boost your brand with our entertainment-focused promotion strategies.</p>
                        </div>
                        <div className='service_card'>
                            <h4>Digital Marketing</h4>
                            <p>Reach the right audience with creative campaigns and marketing solutions.</p>
                        </div>
                        <div className='service_card'>
                            <h4>Talent Management</h4>
                            <p>We support rising artists and entertainers to grow and succeed.</p>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* BLOG PREVIEW SECTION */}

            <section className='blog_preview'>
                <div className='container'>
                    <h2>Latest News</h2>
                    <p className='section_text'>Catch up on the latest updates in entertainment, lifestyle, and business.</p>
                    <div className='grid'>
                        <div className='blog_card'>
                            <h4>Entertainment Updates</h4>
                            <p>Stay tuned with the latest in movies, music, and celebrity news.</p>
                            <Link to='/news/1' className='btn-animate'>Read More</Link>
                        </div>
                        <div className='blog_card'>
                            <h4>Trends & Lifestyle</h4>
                            <p>Explore fashion, lifestyle tips, and trends shaping entertainment.</p>
                            <Link to='/news/3' className='btn-animate'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* CALL TO ACTION SECTION */}

            <section className='cta_section'>
                <div className='container'>
                    <h2>Ready to Work With Us?</h2>
                    <p>
                        Whether you're a business, an artist, or an entertainment over, we've got something for you.
                        Let's create amazing experiences together.
                    </p>
                    <a href='/contact' className='btn'>Contact Us Today</a>
                </div>
            </section>
        </>
    );
}
