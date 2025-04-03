import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import Footer from './components/Footer';
import Kalsharppuja from './pages/Kalsarppuja';
// import Gallery from './components/Gallery';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar   />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Kalsharppuja" element={<Kalsharppuja />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
