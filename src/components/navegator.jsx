import '../App.css';
import { Button } from '@material-tailwind/react';
import Menu from '../assets/Menu.svg'
import Close from '../assets/close.svg'
import { useState } from 'react';



function MenuList({ hidden, setCameraState, setPageState }) {
  const handleCameraChange = (index) => {
    const positions = [
      {
        startPosition: [0, 0, 10],
        endPosition: [0, -50, 5],
        startTarget: [0, 0, 0],
        endTarget: [0, 0, 0],
      },
      {
        startPosition: [0, -50, 5],
        endPosition: [50, 50, 50],
        startTarget: [0, 0, 0],
        endTarget: [0, 0, 0],
      },
      {
        startPosition: [50, 50, 50],
        endPosition: [-50, 20, -30],
        startTarget: [0, 0, 0],
        endTarget: [0, 0, 0],
      },
    ];
    setCameraState(positions[index]); // Actualiza posición y objetivo
    setPageState(index); // Cambia la página
  };

  return (
    <ul className="text-white md:gap-10 text-xl flex flex-col md:flex-row">
      <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(0)}>
        Home
      </Button>
      <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(1)}>
        Skill
      </Button>
      <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(2)}>
        Projects
      </Button>
    </ul>
  );
}


  function MenuListMobile({ hidden, setCameraState, setToggleMenu, setPageState }) {
    const handleCameraChange = (index) => {
      const positions = [
        {
          startPosition: [0, 0, 10],
          endPosition: [0, -50, 5],
          startTarget: [0, 0, 0],
          endTarget: [0, 0, 0],
        },
        {
          startPosition: [0, -50, 5],
          endPosition: [50, 50, 50],
          startTarget: [0, 0, 0],
          endTarget: [0, 0, 0],
        },
        {
          startPosition: [50, 50, 50],
          endPosition: [-50, 20, -30],
          startTarget: [0, 0, 0],
          endTarget: [0, 0, 0],
        },
      ];
      setCameraState(positions[index]); // Actualiza posición y objetivo
      setPageState(index); // Cambia la página
      setToggleMenu(false);
    };
  
    return (
      <ul className={`text-white md:gap-10 text-xl flex flex-col md:flex-row`}>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => handleCameraChange(0)}>
          Home
        </Button>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => handleCameraChange(1)}>
          Skill
        </Button>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => handleCameraChange(2)}>
          Projects
        </Button>
      </ul>
    );
  }

  function Navigator({ setCameraState, setPageState }) {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <nav className="w-full fixed z-40 flex justify-center">
        <div className='w-full max-w-7xl'>
          <div className="w-full h-24 p-5 flex justify-between items-center md:justify-between">
              <h1 className="text-white text-2xl w-full relative z-60">Marcos Gramajo._</h1>
              <div className='hidden md:flex'>
                  <MenuList hidden={toggleMenu} setCameraState={setCameraState} setPageState={setPageState}/>
              </div>
              <div>
                  <img src={Menu} alt="Menu" className='relative md:hidden' onClick={() => setToggleMenu(!toggleMenu)} />
              </div>
          </div>
          <div className={`${!toggleMenu ? 'hidden' : ''} md:hidden absolute w-screen h-screen bg-black/70 top-0 left-0`}>
              <div className="w-full h-24 p-5 flex justify-between items-center md:justify-center">
                  <h1 className="text-white text-2xl w-full relative z-60">Marcos Gramajo._</h1>
                  <div>
                      <img src={Close} alt="Menu" className='relative md:hidden' onClick={() => setToggleMenu(!toggleMenu)} />
                  </div>
              </div>
              <div className=''>
                  <MenuListMobile hidden={false} setCameraState={setCameraState} setToggleMenu={setToggleMenu} setPageState={setPageState} />
              </div>
          </div>
        </div>
      </nav>
    );
  }

export default Navigator;