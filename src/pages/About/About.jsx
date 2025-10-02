import React from 'react'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img1.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

    return (
        <>
            <section id="about">
                <div class="container">
                    {/* Section Heading */}
                    <div className="title_headling">
                        <h3>Who We Are</h3>
                        <p>
                            DonwizzyStudio is a creative powerhouse dedicated to delivering quality entertainment, comedy, music, movies, and innovative digital content.
                            Our goal is to inspire, entertain, and connect with audiences across the globe through creativity and originality.
                        </p>
                    </div>

                    {/* Service Highlight */}

                    <div className="about_box_wrapper">
                        <div className="about_box">
                            <div className="about_icon">
                                {faBusinessIcon}
                            </div>
                            <div className="about_content">
                                <h5>Creative Development</h5>
                                <p>From scriptwriting to production, we develop engaging content that keeps audiences entertained and connected to your brand.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon green_icon">
                                {faChartPieIcon}
                            </div>
                            <div className="about_content">
                                <h5>Digital Integration</h5>
                                <p>We combine creativity with technology-bringing together media, social platforms and storytelling to maximize impact.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon blue_icon">
                                {faTruckFastIcon}
                            </div>
                            <div className="about_content">
                                <h5>Branding & Promotion</h5>
                                <p>Our team specializes in building brands through powerful content, innovative campaigns, and wide audience reach.</p>
                            </div>
                        </div>
                    </div>

                    {/* About Details Section */}
                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_image">
                                <img src={AboutImage} alt="about" className="about_main" loading='lazy'/>
                            </div>
                            <div className="img_info__box">
                                <h6 className="img_info__title">LET'S WORK TOGETHER!</h6>
                                <p>
                                    Ready to take your content or brand to the next level? <br />
                                    Contact us today for a quote and let's create something remarkable.
                                </p>
                                <a href="tel:+18006543210">{faPhoneIcon} <span>1-800-654-3210</span></a>
                            </div>
                        </div>

                        <div className="about_col more_space">
                            <h3>Why Choose DonwizzyStudio?</h3>
                            <p>
                                We're not just a studio, we are a movement. Our passion for creativity, storytelling, and innovation ensures that every project we touch stands out and makes a lasting impact.
                                With a talented team and modern tools, we help brands and individuals shine in today's digital world.
                            </p>

                            <div className="grid_info">
                                <div className="icon">{faUserClockIcon}</div>
                                <div className="detail">
                                    <h4>Fast & Reliable Delivery</h4>
                                    <p>We understand deadlines. Our workflow is built to deliver high-quality results quickly without compromising on creativity.</p>
                                </div>
                            </div>
                            <div className="grid_info">
                                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                                <div className="detail">
                                    <h4>Professional Teamwork</h4>
                                    <p>Our experienced team collaborates with clients to ensure every idea is brought to life in the most impactful way possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission, Vision & Values */}
                    <div className="mission_vision_values">
                        <h3 className="section-title">Our Mission, Vision & Core Values</h3>
                        <div className="mvv_wrapper">
                            <div className="mvv_box">
                                <h4>🎯 Mission</h4>
                                <p>
                                    To entertain, inspire, and empower through innovative storytelling, 
                                    creative production, and impactful digital experiences.
                                </p>
                            </div>
                            <div className="mvv_box">
                                <h4>👁 Vision</h4>
                                <p>
                                    To become Africa’s leading creative hub for entertainment and media, 
                                    recognized globally for excellence and originality.
                                </p>
                            </div>
                            <div className="mvv_box">
                                <h4>💡 Core Values</h4>
                                <ul>
                                    <li>Creativity & Innovation</li>
                                    <li>Integrity & Transparency</li>
                                    <li>Collaboration & Teamwork</li>
                                    <li>Excellence in Delivery</li>
                                    <li>Community Impact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
