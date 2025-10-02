import React, { useState } from 'react'
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins, faLightbulb, faHandshake, faRocket, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // State to track which service is expanded
    const [ expanded, setExpanded ] = useState(null);

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
    const faLightbulbIcon = <FontAwesomeIcon icon={faLightbulb} />
    const faHandshakeIcon = <FontAwesomeIcon icon={faHandshake} />
    const faRocketIcon = <FontAwesomeIcon icon={faRocket} />
    const faBullhornIcon = <FontAwesomeIcon icon={faBullhorn} />


    // Services data (short + long text) 
    
    const services = [
        {
            icon: faLaptopCodeIcon,
            number: "01",
            title: "Cloud Computing",
            shortText: "Scalable and reliable solutions to ensure your digital content and services are always accessible.",
            longText: "Scalable and reliable solutions to ensure your digital content and services are always accessible. We provide scalable and secure cloud solutions designed to handle high-performance needs. Whether it's storage, hosting, or app deployment, our services ensure flexibility and reliability."
        },
        {
            icon: faChartBarIcon,
            number: "02",
            title: "Business Strategy",
            shortText: "We analyze market trends and design strategies that help brands thrive in competitive industries.",
            longText: "Data-driven insights to measure success and make informed decisions for future growth. Our experts study the market, competitors, and consumer behavior to develop tailored strategies that help brands dominate and grow sustainably."
        },
        {
            icon: faBullhornIcon,
            number: "03",
            title: "Marketing & Promotions",
            shortText: "Helping artists and creators grow their audience through strategic music promotion.",
            longText: "Helping artists and creators grow their audience through strategic music promotion. We specialize in music marketing and promotions, connecting artists with the right audience through social media campaigns, streaming strategies, and influencer collaborations. Our goal is to amplify your reach and build a lasting fanbase."
        },
        {
            icon: faMarkerIcon,
            number: "04",
            title: "Decision Maker",
            shortText: "Smart tools and guidance that empower businesses and creators to take confident steps forward.",
            longText: "Smart tools and guidance that empower businesses and creators to take confident steps forward. With our support, decision-making becomes easier. We provide analytics, recommendations, and frameworks to help businesses choose wisely and move faster."
        },
        {
            icon: faUserGearIcon,
            number: "05",
            title: "Customer Oriented",
            shortText: "Every project is tailored to meet the needs of our audience, ensuring relevance and impact.",
            longText: "Every project is tailored to meet the needs of our audience, ensuring relevance and impact. We design every solution with the customer in mind, ensuring that the end product not only meets but exceeds expectations."
        },
        {
            icon: faCoinsIcon,
            number: "06",
            title: "Solution Focused",
            shortText: "Practical, innovative solutions that turn challenges into opportunities for growth and success.",
            longText: "Practical, innovative solutions that turn challenges into opportunities for growth and success. Instead of just identifying problems, we craft actionable solutions that drive real progress and business transformation."
        }
    ];


    return (
        <>
            <div id="services">
                <div className="container">

                    {/* Section Heading */}

                    <div className="title_headling">
                        <h3>What Services We Offer</h3>
                        <p>
                            At DonwizzyStudio, we blend creativity, technology, and strategy to deliver 
                            entertainment and digital services that inspire, connect, and drive results.
                        </p>
                    </div>

                    {/* Service Grid */}

                    <div className="service_wrapper">
                        {services.map((service,index)=>(
                            <div className={`service_box ${expanded === index ? "expanded" : ""}`} key={index}>
                                <div className="service_icon blue_icon">{service.icon}</div>
                                <h4 className="number">{service.number}</h4>
                                <div className="service_content">
                                    <h5>{service.title}</h5>

                                    {/* Content wrapper for height control */}

                                    <div className='service_text'>
                                        <p className={expanded === index ? "expanded" : ""}>
                                            {expanded === index ? service.longText : service.shortText}
                                        </p>
                                    </div>
                                    <a 
                                        href="#" className={`read ${expanded === index ? "active" : ""}`} 
                                        onClick={(e) =>{
                                            e.preventDefault();
                                            setExpanded(expanded === index ? null : index);
                                        }}
                                    >
                                        {expanded === index ? "Show less ▲" : "Read more ▼"}
                                    </a>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    {/* How We Work Section */}

                    <div className="workflow_section">
                        <h3>How We Work</h3>
                        <div className="workflow_wrapper">
                            <div className="workflow_box">
                                <div className="workflow_icon">{faLightbulbIcon}</div>
                                <h5>Ideation</h5>
                                <p>We brainstorm and create bold ideas that stand out.</p>
                            </div>
                            <div className="workflow_box">
                                <div className="workflow_icon green_icon">{faHandshakeIcon}</div>
                                <h5>Collaboration</h5>
                                <p>We work closely with clients to bring concepts to life.</p>
                            </div>
                            <div className="workflow_box">
                                <div className="workflow_icon blue_icon">{faRocketIcon}</div>
                                <h5>Execution</h5>
                                <p>We deliver high-quality results that leave a lasting impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call To Action */}

                    <div className="cta_banner">
                        <h3>Ready to Start Your Next Project?</h3>
                        <p>Let’s collaborate to create something truly unforgettable. Contact us today!</p>
                        <a href="/contact" className="btn">Get in Touch</a>
                    </div>
                </div>
            </div>
        </>
    )
}
