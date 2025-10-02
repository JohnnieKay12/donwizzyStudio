import React, { useState } from 'react'
import "./Entertainment.css"
import { Link } from 'react-router-dom';
import heroVideo from "../../assets/entertainment/entertainment-hero.mp4";
import heroPoster from "../../assets/entertainment/entertainment-poster.jpg"
import movie1 from "../../assets/entertainment/movies1.jpg"
import music1 from "../../assets/entertainment/music1.jpg"
import comedy1 from "../../assets/entertainment/comedy1.jpg"
import lifestyle1 from "../../assets/entertainment/lifestyle1.jpg"
import FeaturedMovie from "../../assets/entertainment/featured-movie.jpg"
import FeaturedMusic from "../../assets/entertainment/featured-music.jpg"
import FeaturedComedy from "../../assets/entertainment/featured-comedy.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFilm, faLaugh, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function Entertainment() {

    // Icons
    const faMusicIcon = <FontAwesomeIcon icon={faMusic} />
    const faFilmIcon = <FontAwesomeIcon icon={faFilm} />
    const faLaughIcon = <FontAwesomeIcon icon={faLaugh} />
    const faChartLineIcon = <FontAwesomeIcon icon={faChartLine} />


    const trendingItems = [
        {
            id: 1,
            title: "Top Box Office Movies",
            description: "Catch the latest blockbusters trending worldwide.",
            image: movie1,
            link: "/movies"
        },
        {
            id: 2,
            title: "Hot Music Releases",
            description: "Stream the newest hits making waves globally",
            image: music1,
            link: "/music"
        },
        {
            id: 3,
            title: "Viral Comedy Clips",
            description: "Laugh out loud with the funniest trending skits.",
            image: comedy1,
            link: "/comedy"
        },
        {
            id: 4,
            title: "Lifestyle Trends",
            description: "Explore fashion, travel, and culture buzzing now.",
            image: lifestyle1,
            link: "/lifestyle"
        },
    ]

    const [ email, setEmail ] = useState("")
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState("");
    const [ shake, setShake ] = useState(false);

    const validateEmail = (email) => {
        // simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError("⚠ Email is required!");
            setSuccess(false);
            triggerShake();
            return;
        }

        if (!validateEmail(email)) {
            setError("⚠ Please enter a valid email address.");
            setSuccess(false);
            triggerShake();
            return;
        }

        // ✅ If valid email
        setError("");
        setSuccess(true);
        setEmail(""); // clear input

        // hide success after 4s
        setTimeout(() => setSuccess(false), 4000);
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);

        // clear error while typing again
        if (error) setError("");
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500); // reset after animation
    };

    return (
        <>

            {/* Hero Section */}
            <section className='hero'>

                {/* Background Video */}
                <img
                    className='hero-img'
                    src={heroPoster}
                    alt='Entertainment Background'
                    loading='lazy'
                />

                {/* Overlay */}
                <div className='hero-overlay'></div>

                {/* Content */}
                <div className='hero-content'>
                    <h1>Unleash Entertainment Like Never Before</h1>
                    <p>
                        Dive into movies, music, comedy, and lifestyle content that keeps you inspired, engaged, and entertained every day.
                    </p>
                    <div className='btn_wrapper'>
                        <a href='#categories' className='btn'>
                            Explore Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Category Section */}
            <section id='categories' className='categories'>
                <div className='container'>
                    <h2 className='section-title'>Explore Entertainment Categories</h2>
                    <div className='category-grid'>

                        {/* Movies */}
                        <div className='category-box'>
                            <div className='icon'>
                                {faFilmIcon}
                            </div>
                            <h3>Movies</h3>
                            <p>Catch the latest blockbusters, trending shows, and timeless classics all in one place.</p>
                            <Link to='/movies' className='btn'>Explore</Link>
                            {/* <a href='/movies' className='btn'>Explore</a> */}
                        </div>

                        {/* Music */}
                        <div className='category-box'>
                            <div className='icon'>
                                {faMusicIcon}
                            </div>
                            <h3>Music</h3>
                            <p>Discover trending hits, playlists, and music that fits every mood and vibe.</p>
                            <Link to='/music' className='btn'>Explore</Link>
                            {/* <a href='/music' className='btn'>Explore</a> */}
                        </div>

                        {/* Comedy */}
                        <div className='category-box'>
                            <div className='icon'>
                                {faLaughIcon}
                            </div>
                            <h3>Comedy</h3>
                            <p>Enjoy stand-up shows, hilarious skits, and the funniest viral comedy moments.</p>
                            <Link to='/comedy' className='btn'>Explore</Link>
                            {/* <a href='/comedy' className='btn'>Explore</a> */}
                        </div>

                        {/* Lifestyle */}
                        <div className='category-box'>
                            <div className='icon'>
                                {faChartLineIcon}
                            </div>
                            <h3>Marketing</h3>
                            <p>Explore fashion, culture, and lifestyle trends that inspire everyday living.</p>
                            <Link to='/lifestyle' className='btn'>Explore</Link>
                            {/* <a href='/lifestyle' className='btn'>Explore</a> */}
                        </div>

                    </div>
                </div>
            </section>


            {/* Trending Sections */}
            <section className="trending" id="trending">
                <div className="container">
                    <h2 className="section-title">Trending Now 🔥</h2>
                    <div className="trending-grid">
                        {trendingItems.map((item) => (
                            <div className="trending-card" key={item.id}>
                                <img src={item.image} alt={item.title} className="trending-img" loading='lazy'/>
                                <div className="trending-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Link to={item.link} className="btn">Explore</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Featured Section */}
            <section className="featured" id="featured">
                <div className="container">
                    <h2 className="section-title">🌟 Featured Content</h2>
                    <p className="section-subtitle">
                        Discover handpicked highlights from movies, music, comedy, and lifestyle.
                    </p>

                    <div className="featured-grid">
                        {/* Main Spotlight */}
                        <div className="featured-main">
                            <img
                            src={FeaturedMovie}
                            alt="Featured Movie"
                            className="featured-img"
                            loading='lazy'
                            />
                            <div className="featured-overlay">
                                <h3>Movie of the Week</h3>
                                <p>
                                    Experience breathtaking visuals and storytelling that will keep you hooked.
                                </p>
                                <Link to="/movies" className="btn">Watch Now</Link>
                            </div>
                        </div>

                        {/* Side Highlights */}
                        <div className="featured-side">
                            <div className="featured-card">
                                <img
                                    src={FeaturedMusic}
                                    alt="Music Spotlight"
                                    loading='lazy'
                                />
                                <div className="card-overlay">
                                    <h4>Artist Spotlight</h4>
                                    <Link to="/music" className="btn-small">Listen Now</Link>
                                </div>
                            </div>

                            <div className="featured-card">
                                <img
                                    src={FeaturedComedy}
                                    alt="Comedy Feature"
                                    loading='lazy'
                                />
                                <div className="card-overlay">
                                    <h4>Comedy Special</h4>
                                    <Link to="/comedy" className="btn-small">Laugh Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* NewsLetter Section */}
            <section className='newsletter' id='newsletter'>
                <div className='container newsletter-content'>
                    <h2>Stay Updated!</h2>
                    <p>
                        Join our community and never miss out on the latest movies, music, comedy, and lifestyle updates. Fresh content delivered straight to your inbox.
                    </p>

                    <form className='newsletter-form' onSubmit={handleSubmit}>
                        <input 
                            type='email'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={handleInputChange}
                            required
                            className={error && shake ? "input-error shake" : ""}
                        />
                        <button type='submit' className='btn'>Subscribe</button>
                    </form>

                    {/* Success Message */}
                    {error && (
                        <p className={`error-message $ {shake ? "shake" : ""}`}>{error}</p>
                    )}
                        {success && (
                            <p className='success-message'>✅Thanks for Subscribing!</p>
                        )}
                </div>
            </section>


        </>
    );
}
