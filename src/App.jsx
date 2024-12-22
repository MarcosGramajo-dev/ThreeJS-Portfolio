import { useState } from 'react';
import DrawerWithNavigation from './components/drawer.jsx';
import ModelGeometricShapes from './components/modelGeometricShapes.jsx'
import './App.css';
import { Button } from '@material-tailwind/react';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [cameraState, setCameraState] = useState({
    position: [0, -50, 5],
    target: [0, 0, 0], 
  });

  const handleCameraChange = (index) => {
    if (index === 0) {
      setCameraState({ position: [0, -50, 5], target: [0, 0, 0] });
    } else if (index === 1) {
      setCameraState({ position: [50, 50, 50], target: [0, 0, 0] });
    } else if (index === 2) {
      setCameraState({ position: [-50, 20, -30], target: [0, 0, 0] });
    } else if (index === 3) {
      setCameraState({ position: [-50, 50, -30], target: [0, 0, 0] });
    }

    setSelectedIndex(index);
  };

  return (
    <div className="lg:overflow-hidden flex flex-col items-center" style={{ background: 'radial-gradient(circle, #000, #030D1E)' }} >
      <nav className="w-full fixed z-40">
        <div className="flex w-full px-12 h-24 justify-center lg:justify-between items-center">
          <h1 className='text-white text-4xl'> Marcos Gramajo._ </h1>
          <ul className='text-white flex gap-10 text-xl'>
            <Button variant="text" color='white' size='lg' onClick={() => handleCameraChange(0)}>Home</Button>
            <Button variant="text" color='white' size='lg' onClick={() => handleCameraChange(1)}>Skill</Button>
            <Button variant="text" color='white' size='lg' onClick={() => handleCameraChange(2)}>Proyects</Button>
            <Button variant="text" color='white' size='lg' onClick={() => handleCameraChange(3)}>Contact</Button>
          </ul>
        </div>
      </nav>
      
      <div className="absolute top-2/4 z-50 left-0">
        <DrawerWithNavigation/>
      </div>

      <div className='absolute z-40 top-[50vh] flex flex-col justify-center gap-5'>
        <h1 className='text-white text-7xl uppercase scale-up-ver-top' > Welcome to my Portfolio </h1>
      </div>

      <div className='w-[100vw] h-[100vh] min-h-96'>
        <ModelGeometricShapes cameraState={cameraState} />
      </div>
    </div>
  );
}

export default App;
