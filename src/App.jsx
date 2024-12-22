import { useState } from 'react';
import DrawerWithNavigation from './components/drawer.jsx';
import ModelGeometricShapes from './components/modelGeometricShapes.jsx'
import './App.css';
import { Button } from '@material-tailwind/react';
import Menu from './assets/Menu.svg'
import Navigator from './components/navegator.jsx';

function App() {
  const [cameraState, setCameraState] = useState({
    position: [0, -50, 5],
    target: [0, 0, 0],
  });

  return (
    <div className="lg:overflow-hidden flex flex-col items-center" style={{ background: 'radial-gradient(circle, #000, #030D1E)' }}>
      <Navigator setCameraState={setCameraState} />

      <div className="absolute top-2/4 z-50 left-0">
        <DrawerWithNavigation />
      </div>

      <div className="absolute z-30 top-[30vh] w-full text-center flex flex-col justify-center items-center gap-5 md:top-[50vh]">
        <h1 className="text-white text-2xl uppercase scale-up-ver-top md:text-7xl">Welcome to my Portfolio</h1>
      </div>

      <div className="w-[100vw] h-[100vh] min-h-96">
        <ModelGeometricShapes cameraState={cameraState} />
      </div>
    </div>
  );
}

export default App;
