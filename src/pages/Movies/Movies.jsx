import React, { useState } from 'react'
import './Movies.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Modal from './Modal';
import trendingImage1 from "../../assets/movies/trending1.jpg"
import trendingImage2 from "../../assets/movies/trending2.jpg"
import trendingImage3 from "../../assets/movies/trending3.jpg"
import trendingImage4 from "../../assets/movies/trending4.jpg"
import trendingImage5 from "../../assets/movies/trending5.jpg"
import trendingImage6 from "../../assets/movies/trending6.jpg"
import trendingImage7 from "../../assets/movies/trending7.jpg"
import trendingImage8 from "../../assets/movies/trending8.jpg"
import trendingImage9 from "../../assets/movies/trending9.jpg"
import trendingImage10 from "../../assets/movies/trending10.jpg"


 // Trending Section
const movies = [
    {
        id: 1,
        title: "Beauty in Black",
        image: trendingImage1,
        trailer: "https://www.youtube.com/embed/0dclNQV71-k",
        fullMovie: "https://www.youtube.com/watch?v=xxxx"
    },
    {
        id: 2,
        title: "The Waiter",
        image: trendingImage2,
        trailer: "https://www.youtube.com/embed/yyyy",
        fullMovie: "https://www.youtube.com/watch?v=yyyy"
    },
    {
        id: 3,
        title: "To Kill a Monster",
        image: trendingImage3,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 4,
        title: "Wednesday",
        image: trendingImage4,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 5,
        title: "ThinLine",
        image: trendingImage5,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 6,
        title: "The Tyrant",
        image: trendingImage6,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 7,
        title: "Joseon Chefs",
        image: trendingImage7,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 8,
        title: "Fatal Seduction",
        image: trendingImage8,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 9,
        title: "Devil is a Liar",
        image: trendingImage9,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 10,
        title: "Shogun",
        image: trendingImage10,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    
]


// Latest Trailer Section

const trailers = [
    {
        id: 1,
        title: "Beauty in Black",
        image: trendingImage1,
        trailer: "https://www.youtube.com/embed/xxxx",
        fullMovie: "https://www.youtube.com/watch?v=xxxx"
    },
    {
        id: 2,
        title: "The Waiter",
        image: trendingImage2,
        trailer: "https://www.youtube.com/embed/yyyy",
        fullMovie: "https://www.youtube.com/watch?v=yyyy"
    },
    {
        id: 3,
        title: "To Kill a Monster",
        image: trendingImage3,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 4,
        title: "Wednesday",
        image: trendingImage4,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 5,
        title: "ThinLine",
        image: trendingImage5,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 6,
        title: "The Tyrant",
        image: trendingImage6,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
]


// Top Picks 

const topPicks = [
    {
        id: 5,
        title: "ThinLine",
        image: trendingImage5,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 6,
        title: "The Tyrant",
        image: trendingImage6,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 7,
        title: "Joseon Chefs",
        image: trendingImage7,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 8,
        title: "Fatal Seduction",
        image: trendingImage8,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 9,
        title: "Devil is a Liar",
        image: trendingImage9,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
    {
        id: 10,
        title: "Shogun",
        image: trendingImage10,
        trailer: "https://www.youtube.com/embed/zzzz",
        fullMovie: "https://www.youtube.com/watch?v=zzzz"
    },
]

export default function Movies() {

    const [trailerUrl, setTrailerUrl] = useState("");
    const [open, setOpen] = useState(false);

    const handlePlay = (url) => {
        setTrailerUrl(url);
        setOpen(true);
    };
    

    // Hero Section
    const scrollToTrending = () => {
        const trending =
        document.getElementById("trending");
        if (trending) {
            trending.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <>
            <section className='movie-hero'>
                <div className='movie-hero-overlay'>
                    <h1 className='movie-hero-title'>Unlimited movies, TV shows, and more.</h1>
                    <p className='movie-hero-subtitle'>Your home for the best Nollywood and international movies.</p>
                    <p className='movie-hero-subtext'>Ready to watch? Click below to explore trending movies.</p>

                    <button onClick={scrollToTrending} className='movie-hero-btn'>
                        Get Started
                    </button>
                </div>
            </section>


            {/* Trending Section  */}
            <section className="trending" id="trending">
                <h2 className="trending-title">Trending Now</h2>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={15}
                    navigation={true}
                    loop={true} // infinite loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // auto-slide
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    className="trending-swiper"
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide key={movie.id}>
                            <div className="movie-card">
                                {/* Rank number */}
                                <span className="rank">{index + 1}</span>
                                <img src={movie.image} alt={movie.title} />
                                <div className="overlay">
                                    <button
                                        className="btn play-btn"
                                        onClick={() => handlePlay(movie.trailer)}
                                    >
                                        ▶ Play Trailer
                                    </button>
                                    <a
                                        href={movie.fullMovie}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn full-btn"
                                    >
                                        🎬 Watch Full Movie
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Modal open={open} onClose={() => setOpen(false)} url={trailerUrl} />
            </section>



            {/* Latest Trailers Section */}

            <section className='trailers'>
                <h2 className='trailers-title'>Latest Trailers</h2>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className='trailers-swiper'
                >
                    {trailers.map((trailer) => (
                        <SwiperSlide key={trailer.id}>
                            <div className='trailer-card'>
                                <img src={trailer.image}alt={trailer.title} />
                                <div className='trailer-overlay'>
                                    <button 
                                        className='btn play-btn'
                                        onClick={() => handlePlay(trailer.trailer)}
                                    >
                                        ▶ Play Trailer
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


            {/* Top Picks Section */}
            <section className='top-picks'>
                <h2 className='top-picks-title'>Top Picks For You</h2>
                <p className='top-picks-subtext'>Handpicked recommendations from the best of Nollywood and International</p>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    // navigation={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[ Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className='top-picks-swiper'
                >
                    {topPicks.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className='pick-card'>
                                <img src={movie.image} alt={movie.title} />
                                <p className='pick-title'>{movie.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


            {/* Coming Soon Section */}
            <section className='coming-soon' id='coming-soon'>
                <h2 className='section-title'>Coming Soon</h2>
                <p className='section-subtext'>Get ready for upcoming blockbusters and fresh releases.</p>

                <Swiper 
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    grabCursor={true}
                    modules={[ Navigation, Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 2 },
                    }}
                    className='coming-swiper'
                >
                    
                    {[
                        {
                            id: 1,
                            title: "The Tyrant",
                            image: trendingImage6,
                            release: "Nov 15, 2025",
                        },
                        {
                            id: 2,
                            title: "Joseon Chefs",
                            image: trendingImage7,
                            release: "Dec 2, 2025",
                        },
                        {
                            id: 3,
                            title: "Fatal Seduction",
                            image: trendingImage8,
                            release: "Jan 10, 2026",
                        },
                        {
                            id: 4,
                            title: "Devil is a Liar",
                            image: trendingImage9,
                            release: "Feb 5, 2026",
                        },
                        {
                            id: 5,
                            title: "Shogun",
                            image: trendingImage10,
                            release: "Mar 1, 2026"
                        },
                    ].map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className='coming-card'>
                                <img src={movie.image} alt={movie.title} />
                                <div className='coming-info'>
                                    <h3>{movie.title}</h3>
                                    <p>Release: {movie.release}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

        </>
        


    );
}
