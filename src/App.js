import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Entertainment from './pages/Entertainment/Entertainment';
import Services from './pages/Services/Services';
import News from './pages/News/Blog';
import Contact from './pages/Contact/Contact';
import SinglePost from './pages/News/SinglePost';
import Music from './pages/Music/Music';
import Movies from './pages/Movies/Movies'
import Lifestyle from './pages/Lifestyle/Lifestyle'
import Comedy from './pages/Comedy/Comedy'

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader/Loader"


function App() {
  return (
    <Router>
      <Loader />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<SinglePost />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/music' element={<Music />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path='/comedy' element={<Comedy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
