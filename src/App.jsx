import { useState } from 'react';
import DrawerWithNavigation from './components/drawer.jsx';
import ModelGeometricShapes from './components/modelGeometricShapes.jsx'
import './App.css';
import Navigator from './components/navegator.jsx';
import Skills from './components/Pages/Skills.jsx';
import Home from './components/Pages/Home.jsx'
import Projects from './components/Pages/Projects.jsx'

function App() {
  const [cameraState, setCameraState] = useState({
    position: [0, -50, 5],
    target: [0, 0, 0],
  });

  const [pageState, setPageState] = useState(0);

  // Función para renderizar la vista adecuada
  const renderPage = () => {
    switch (pageState) {
      case 0:
        return <Home key={pageState} />;
      case 1:
        return <Skills key={pageState} />;
      case 2:
        return <Projects key={pageState} />;
      case 3:
        return <Contact key={pageState} />;
      default:
        return <Home key={pageState} />;
    }
  };

  return (
    <div className="lg:overflow-hidden flex flex-col items-center" style={{ background: 'radial-gradient(circle, #000, #030D1E)' }}>
      <Navigator setCameraState={setCameraState} setPageState={setPageState} />

      <div className="absolute top-2/4 z-50 left-0">
        <DrawerWithNavigation />
      </div>

      <div className="w-[100vw] h-[100vh] min-h-96">
        <ModelGeometricShapes cameraState={cameraState} />
      </div>
      {/* Vistas / Paginas */}
      <div className='absolute top-[10vh] w-[80vw] h-[80vh] max-w-7xl'>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
