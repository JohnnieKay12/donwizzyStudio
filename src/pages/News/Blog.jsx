import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import BlogImage from '../../assets/blog/blog.jpg';
// import FeaturedNewsImage from '../../assets/blog/featured-news.jpg'
import BlogImages1 from '../../assets/blog/news1.jpg'
import BlogImages2 from '../../assets/blog/news2.jpg'
import BlogImages3 from '../../assets/blog/news3.jpg'
import BlogImages4 from '../../assets/blog/news4.jpg'
import BlogImages5 from '../../assets/blog/news5.jpg'
import BlogImages6 from '../../assets/blog/news6.jpg'
import BlogImages7 from '../../assets/blog/news7.jpg'
import BlogImages8 from '../../assets/blog/news8.jpg'


export default function Blog() {

    // Blog posts

    const blogPosts = [
        {
            id: 1,
            title: "Entertainment Updates",
            desc: "Stay tuned with the latest in movies, music, and celebrity news.",
            img: BlogImages1,
        },
        {
            id: 2,
            title: "Behind the Scenes",
            desc: "Exclusive insights into how we create content at Donwizzy Studio.",
            img: BlogImages2,
        },
        {
            id: 3,
            title: "Trends & Lifestyle",
            desc: "Explore fashion, lifestyle tips, and trends shaping entertainment.",
            img: BlogImages3,
        },
        {
            id: 4,
            title: "Tech Meets Entertainment",
            desc: "Discover how AI, VR, and tech are shaping the future of content.",
            img: BlogImages4,
        },
        {
            id: 5,
            title: "Artist Spotlight",
            desc: "Meet the rising talents in music, film, and content creation for 2025.",
            img: BlogImages5,
        },
        {
            id: 6,
            title: "Events & Shows",
            desc: "Catch the biggest concerts, festivals, and entertainment experiences.",
            img: BlogImages6,
        },        
        {
            id: 7,
            title: "Creative Expansion: DonwizzyStudio’s Next Chapter",
            desc: "DonwizzyStudio is broadening its services with live-streaming, branded films, and mentorship programs for creators.",
            img: BlogImages7,
        },             
        {
            id: 8,
            title: "African Entertainment Goes Global",
            desc: "How African music, comedy, and film are shaping global culture and winning audiences worldwide.",
            img: BlogImages8,
        },             
    ];

    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="blog_col">
                            <h3>Latest News & Updates</h3>
                            <p>
                                Stay updated with the latest entertainment stories, creative
                                insights, and behind-the-scenes updates from DonwizzyStudio.
                            </p>
                            <div className="btn_wrapper">
                                <a className="btn" href="#featured">Read Latest News</a>
                            </div>
                        </div>
                        <div className="blog_col">
                            <div className="blog_image">
                                <img src={BlogImage} alt="Blog" loading='lazy'/>
                            </div>
                        </div>
                    </div>


                    {/* Featured Post */}

                    <div className="section_heading" id='featured'>
                        <h3>Featured Post</h3>
                        <p>Highlighting our top story and important updates from DonwizzyStudio.</p>
                    </div>
                    <div className="featured_post">
                        <div className="featured_image">
                            <img src={BlogImage} alt="Featured Post" loading='lazy'/>
                        </div>
                        <div className="featured_content">
                            <h4>Exclusive: DonwizzyStudio Expands Creative Services</h4>
                            <p>
                                DonwizzyStudio is breaking new ground by offering a wider range
                                of entertainment and media services. From content creation to
                                digital storytelling, here’s everything you need to know…
                            </p>
                            <Link to='/news/9' className="read_more">
                                Read More →
                            </Link>
                        </div>
                    </div>

                    {/* Blog Grid */}

                    <div className="section_heading">
                        <h3>More News & Articles</h3>
                        <p>Catch up with our latest blog posts and creative insights.</p>
                    </div>
                    <div className="blog_grid">
                        {blogPosts.slice(0).map((post) => (
                            <div key={post.id} className="blog_card">
                                <img src={post.img} alt={post.title} loading='lazy'/>
                                <div className="blog_card_content">
                                    <h4>{post.title}</h4>
                                    <p>{post.desc}</p>
                                    <Link to={`/news/${post.id}`} className="read_more">Read More →</Link>
                                    {/* <a href="/" className="read_more">Read More →</a> */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
