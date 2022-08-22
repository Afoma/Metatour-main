import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Web3Schools from './pages/Web3Schools';
import DAOs from './pages/DAOs';
import NFTMarketPlaces from './pages/NFTMarketPlaces';
import Web3Jobs from './pages/Web3Jobs';
import Web3Grants from './pages/Web3Grants';

// import '@rainbow-me/rainbowkit/styles.css';
// import {
//   apiProvider,
//   configureChains,
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
// } from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';


// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
//   [
//     apiProvider.alchemy(process.env.ALCHEMY_ID),
//     apiProvider.fallback()
//   ]
// );
// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains
// });
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider
// })

function App() {
  return (
    <>
    {/* <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme({
        accentColor: 'pink',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
      })} chains={chains}> */}
      
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
    
      {/* </RainbowKitProvider>
    </WagmiProvider> */}
    </>
  );
}

export default App;
