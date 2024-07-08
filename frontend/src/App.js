import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import About from './pages/About';
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
