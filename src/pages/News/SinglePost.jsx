import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './SinglePost.css';
// import FeaturedNewsImage from '../../assets/blog/featured-news.jpg'
import BlogImage from '../../assets/blog/blog.jpg';
import BlogImages1 from '../../assets/blog/news1.jpg'
import BlogImages2 from '../../assets/blog/news2.jpg'
import BlogImages3 from '../../assets/blog/news3.jpg'
import BlogImages4 from '../../assets/blog/news4.jpg'
import BlogImages5 from '../../assets/blog/news5.jpg'
import BlogImages6 from '../../assets/blog/news6.jpg'
import BlogImages7 from '../../assets/blog/news7.jpg'
import BlogImages8 from '../../assets/blog/news8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUser, faTag, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function SinglePost() {
    const { id } = useParams();
    const navigate = useNavigate();

  // Replace/add posts here as you add more articles.
    const posts = [
        {
            id: 1,
            title: "Entertainment Updates: The Year in Highlights",
            author: "Donwizzy Studio",
            date: "September 20, 2025",
            category: "Entertainment",
            tags: ["Movies", "Music", "Trends"],
            image: BlogImages1,
            content: [
                `2025 has been a landmark year for entertainment across Africa and beyond. From breakthrough indie films to major music releases that crossed borders, this year showed how storytelling and sound can bring massive cultural impact.`,
                `At DonwizzyStudio we tracked a number of recurring trends: stronger cross-border collaborations, increased investment in production quality, and a focus on storytelling that reflects real-life experiences. This article highlights the major moments, why they matter, and what content creators and brands should watch next.`,
                `Major trends included the rise of short-form series that stream on social platforms, the blending of music promotion with cinematic short films, and a stronger presence of homegrown talent on international stages. For creators: focus on consistent storytelling, invest in sound design and post-production, and lean into cross-platform premieres to reach wider audiences.`,
            ],
        },
        {
            id: 2,
            title: "Behind the Scenes: How DonwizzyStudio Creates Viral Content",
            author: "Donwizzy Studio",
            date: "August 13, 2025",
            category: "Production",
            tags: ["Production", "Strategy", "Creative"],
            image: BlogImages2,
            content: [
                `Creating viral content isn't luck—it's planning, testing, and iteration. In this piece we walk you through DonwizzyStudio’s production pipeline, from initial concept through to distribution.`,
                `We start with a 1-page creative brief, then run a rapid prototyping stage (short clips for social), gather early feedback, and iterate. Our editing team focuses on rhythm and pacing—two factors that consistently increase watch time.`,
                `Distribution is planned from day one: content is adapted into vertical and horizontal formats, captions are tested, and calls-to-action are tuned for each platform. For clients, we recommend a 3-stage launch (soft launch → paid push → evergreen distribution) to maximize reach.`,
            ],
        },
        {
            id: 3,
            title: "Trends & Lifestyle: Entertainment Meets Fashion and Lifestyle",
            author: "Donwizzy Studio",
            date: "July 02, 2025",
            category: "Culture",
            tags: ["Lifestyle", "Fashion", "Culture"],
            image: BlogImages3,
            content: [
                `The intersection of entertainment with fashion and lifestyle has never been stronger. Musicians collaborating with fashion brands and skits that shape micro-trends are now routine.`,
                `Brands should consider releasing limited capsule collections tied to content drops, or co-creating with creators who have a strong visual identity. For creators, aligning your visuals (color palettes, costumes, set design) with a lifestyle narrative helps unlock partnerships and sponsorships.`,
                `Ultimately, authenticity wins. Audiences respond best when fashion and lifestyle moments amplify the story—rather than distract from it.`,
            ],
        },
        {
            id: 4,
            title: "Tech Meets Entertainment: The Future of Content Creation",
            author: "Donwizzy Studio",
            date: "October 10, 2025",
            category: "Technology",
            tags: ["AI", "VR", "Innovation"],
            image: BlogImages4,
            content: [
                `Entertainment and technology are merging like never before. From AI-generated scripts to immersive VR concerts, the way content is created and consumed is undergoing a digital revolution.`,
                `Creators are exploring how artificial intelligence can streamline editing, generate visual effects, and even assist with music composition. Meanwhile, VR and AR are opening doors for audiences to experience stories in interactive, lifelike ways.`,
                `For brands and creators, the opportunity is clear: early adoption of tech-driven storytelling not only sets you apart but also expands the creative possibilities of your work. The next decade will belong to those who embrace both art and tech.`,
            ],
        },
        {
            id: 5,
            title: "Artist Spotlight: Rising Talents to Watch in 2025",
            author: "Donwizzy Studio",
            date: "September 5, 2025",
            category: "Spotlight",
            tags: ["Music", "Film", "Creatives"],
            image: BlogImages5,
            content: [
                `2025 is shaping up to be a breakout year for fresh talents across music, film, and digital content. From underground musicians going viral on TikTok to indie filmmakers winning global recognition, new voices are taking center stage.`,
                `At DonwizzyStudio, we’ve curated a list of rising stars whose creative energy is reshaping the industry. These talents stand out not only for their skill but for their ability to connect authentically with audiences.`,
                `Keep an eye on collaborations between these artists and established brands. Partnerships are key, and they signal how talent can transition from niche to mainstream success in record time.`,
            ],
        },
        {
            id: 6,
            title: "Events & Shows: Must-Attend Entertainment Experiences",
            author: "Donwizzy Studio",
            date: "August 21, 2025",
            category: "Events",
            tags: ["Concerts", "Festivals", "LiveShows"],
            image: BlogImages6,
            content: [
                `From Lagos to Los Angeles, 2025 has been packed with entertainment events redefining how audiences connect with their favorite artists and creators.`,
                `Music festivals are going hybrid with live-streaming options, while film festivals are spotlighting short-form digital content alongside traditional screenings. The rise of immersive theater and live podcasts also reflects audience demand for diverse experiences.`,
                `Whether you’re a creator looking to showcase your work or a fan craving unforgettable moments, attending these events isn’t just entertainment — it’s being part of culture in the making.`,
            ],
        },
        {
            id: 7,
            title: "Creative Expansion: DonwizzyStudio’s Next Chapter",
            author: "Donwizzy Studio",
            date: "October 1, 2025",
            category: "Business & Growth",
            tags: ["Expansion", "Media", "Mentorship"],
            image: BlogImages7,
            content: [
                `DonwizzyStudio is proud to announce the expansion of its creative services. This bold move builds on years of innovation in digital storytelling and entertainment.`,
                `The expansion includes live-streaming event production, branded documentaries, and interactive content powered by AR and AI-driven video editing.`,
                `Alongside new services, DonwizzyStudio is investing heavily in talent incubation. Training programs and mentorship initiatives will provide the next generation of African creators with the tools they need to succeed.`,
                `Our vision is clear: to remain at the forefront of African entertainment while building partnerships that resonate globally.`,
            ],
        },                   
        {
            id: 8,
            title: "African Entertainment Goes Global",
            author: "Donwizzy Studio",
            date: "October 12, 2025",
            category: "Culture & Trends",
            tags: ["Africa", "Global", "Culture"],
            image: BlogImages8,
            content: [
                `African entertainment has gone from local stages to global arenas. In 2025, African music, comedy, and film continue to dominate playlists, streaming charts, and international festivals.`,
                `Artists like Burna Boy, Tems, Trevor Noah, and Nollywood filmmakers have proven that African voices carry universal appeal.`,
                `Streaming platforms are investing more in African productions, opening opportunities for creators to tell authentic stories while reaching worldwide audiences.`,
                `DonwizzyStudio remains committed to amplifying this growth by producing content that reflects African culture while appealing to global tastes.`,
            ],
        },                    
        {
            id: 9,
            title: "Exclusive: DonwizzyStudio Expands Creative Services",
            author: "Donwizzy Studio",
            date: "October 1, 2025",
            category: "Business & Growth",
            tags: ["Expansion", "Media", "Creative Services"],
            image: BlogImage,
            content: [
                `DonwizzyStudio is proud to announce the expansion of its services, building on years of innovation in entertainment and digital storytelling. This milestone marks a new chapter in our journey to empower creators, brands, and audiences worldwide.`,
                `The expansion includes the launch of new content verticals such as live-streaming event production, branded documentaries, and interactive media experiences. By combining storytelling with cutting-edge technology like AR and AI-driven video editing, DonwizzyStudio is setting a new standard in modern entertainment.`,
                `Our team has also doubled down on partnerships, collaborating with production houses, influencers, and creative agencies across Africa and beyond. This ensures that clients benefit from global best practices while keeping the authentic African creative voice at the forefront.`,
                `In addition, we are investing in talent incubation — providing training and mentorship for the next generation of filmmakers, editors, and digital creators. This initiative ensures sustainable growth and continuous innovation within the entertainment ecosystem.`,
            ],
        }                        
    ];
    
    const post = posts.find(p => p.id === parseInt(id, 10));

    if (!post) {
        return (
            <section className="single-post container">
                <div className="post-not-found">
                    <h2>Post not found</h2>
                    <p>We couldn't find the article you're looking for.</p>
                    <button className="btn" onClick={() => navigate('/news')}>Back to News</button>
                </div>
            </section>
        );
    }

    const otherPosts = posts.filter(p => p.id !== post.id).slice(0, 4);

    return (
        <section className="single-post container">
            <div className="post-back">
                <button className="link-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
            </div>

            <article className="post-hero">
                <div className="hero-image">
                    <img src={post.image} alt={post.title} loading='lazy'/>
                </div>

                <div className="hero-content">
                    <h1 className="post-title">{post.title}</h1>

                    <div className="post-meta">
                        <span className="meta-item"><FontAwesomeIcon icon={faUser} /> {post.author}</span>
                        <span className="meta-item"><FontAwesomeIcon icon={faCalendarDay} /> {post.date}</span>
                        <span className="meta-item"><FontAwesomeIcon icon={faTag} /> {post.category}</span>
                    </div>

                    <div className="post-tags">
                        {post.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
                    </div>

                    <div className="post-share">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noreferrer" aria-label="Share on Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href={`https://instagram.com`} target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href={`https://youtube.com`} target="_blank" rel="noreferrer" aria-label="YouTube">
                        <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </article>

            <article className="post-body">
                {post.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}

                <blockquote className="post-quote">
                “Great entertainment tells a story people want to revisit. Focus on emotion, clarity, and rhythm.”
                </blockquote>

                <h3>Key takeaways</h3>
                <ul>
                <li>Plan distribution from day one — format & platform matter.</li>
                <li>Invest in sound and editing — they strongly influence watch time.</li>
                <li>Test short-form prototypes before a big launch.</li>
                </ul>

                <div className="post-cta">
                    <h4>Want DonwizzyStudio to produce your next project?</h4>
                    <p>We offer full production packages from concept to distribution. <Link to="/contact" className="btn">Contact Us →</Link></p>
                </div>
            </article>

            <aside className="related-posts">
                <h4>Related articles</h4>
                <div className="related-list">
                    {otherPosts.map(p => (
                        <Link key={p.id} to={`/news/${p.id}`} className="related-card">
                            <img src={p.image} alt={p.title} loading='lazy'/>
                            <div className="related-info">
                                <h5>{p.title}</h5>
                                <small>{p.date}</small>
                            </div>
                        </Link>
                    ))}
                </div>
            </aside>
        </section>
    );
}
