import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Web3Schools from './pages/Web3Schools';
import DAOs from './pages/DAOs';
import NFTMarketPlaces from './pages/NFTMarketPlaces';
import Web3Jobs from './pages/Web3Jobs';
import Web3Grants from './pages/Web3Grants';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Web3Schools' element={<Web3Schools/>} />
        <Route path='/DAOs' element={<DAOs/>} />
        <Route path='/NFTMarketPlaces' element={<NFTMarketPlaces/>} />
        <Route path='/Web3Grants' element={<Web3Grants/>} />
        <Route path='/Web3Jobs' element={<Web3Jobs/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
