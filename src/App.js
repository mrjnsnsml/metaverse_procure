// import logo from './logo.svg';
import './App.css';
import { Canvas} from '@react-three/fiber';
import {Suspense, useRef,useState, useEffect } from 'react';
import {OrbitControls, useGLTF, Sky, PerspectiveCamera} from '@react-three/drei';

// artifacts
import { MyBuilding } from './components/my-building';
import { TudorResidence } from './components/TudorResidence';
import { SomeResidenceOne } from './components/SomeResidenceOne';
import { FenceVictorian } from './components/fence';
import { Audi } from './components/audi';

import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';

// Player movement
import { FPV } from './components/FPV';
import { Player } from './components/Player';

// blockchain 
import Web3 from 'web3';
import Navbar from './components/Navbar';

function App() {
  const [web3, setWeb3] = useState(null);
	const [account, setAccount] = useState(null);
	const [xkeyboard, setXkeyboard] = useState(null);

// MetaMask Login/Connect
const web3Handler = async () => {
  // if (web3) {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   setAccount(accounts[0])
  // }
}

// Pending: Make Keyboard selection user
const ToggleKeyboardHandler = async () => {
  setXkeyboard({});
  console.log("xkeyboard:", xkeyboard );
}

// // Pending: Loading blockchain data
// const loadBlockchainData = async () => {
//   // if (typeof window.ethereum !== 'undefined') {
//   //   const web3 = new Web3(window.ethereum)
//   //   setWeb3(web3)
//   // }
//   // const accounts = await web3.eth.getAccounts()
// 	// if (accounts.length > 0) {
//   //   setAccount(accounts[0])
// 	// }
// 	const networkId = await web3.eth.net.getId()

//   //pending: add more logic 

//   // Event listeners...Reload if metamask account was changed m if blockchain changed
//   window.ethereum.on('accountsChanged', function (accounts) {
//     setAccount(accounts[0])
//   })

//   window.ethereum.on('chainChanged', (chainId) => {
//     window.location.reload();
//   })

// }
  
// useEffect(() => {
//   loadBlockchainData()
// }, [account])


const CameraHelper = async () => {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <group position = {[0,0,2]}>
    <cameraHelper args={[camera]} />
  </group>
}

  return (
  <div>
    <Navbar web3Handler={web3Handler} account={account} />
    <Canvas>
       <Suspense fallback={null}>
          <Sky distance={450000} sunPosition={[1, 10, 0]} inclination={0} azimuth={0.25} />
          <ambientLight intensity={0.5} />
          <Physics>
            <Ground />  
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[-1,15,10]}  />
                  <MyBuilding position={[-20, 0, 1]} /> 
                  <MyBuilding position={[-12, 0, 1]} /> 
                  <TudorResidence position={[-1, 0, 1]} /> 
                    <pointLight position={[25, 23, -2]} intensity={0.5} angle={0.1} /> 
                     <Audi position={[20, 1, -5]}  /> 
                    < FenceVictorian position={[1, 1, -12]} />
                  <MyBuilding position={[8, 0, 1]} /> 
                  <MyBuilding position={[16, 0, 1]} /> 
           <Player />
          </Physics>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
       </Suspense>
    </Canvas>
    </div>

  );
}

export default App;
