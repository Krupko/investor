import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../pages/Home/Home.jsx';
import Mypath from '../pages/Mypath/Mypath.jsx';
import Course from '../pages/Course/Course.jsx';
import Benefits from '../pages/Benefits/Benefits.jsx';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="flex-block">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypath" element={<Mypath />} />
        <Route path="/course" element={<Course />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
