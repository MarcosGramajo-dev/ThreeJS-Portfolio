import '../App.css';
import { Button } from '@material-tailwind/react';
import Menu from '../assets/Menu.svg'
import { useState } from 'react';



function MenuList({ hidden, setCameraState }) {
    const handleCameraChange = (index) => {
      const positions = [
        { position: [0, -50, 5], target: [0, 0, 0] },
        { position: [50, 50, 50], target: [0, 0, 0] },
        { position: [-50, 20, -30], target: [0, 0, 0] },
        { position: [-50, 50, -30], target: [0, 0, 0] },
      ];
      setCameraState(positions[index]); // Llama correctamente a setCameraState
    };
  
    return (
      <ul className={`text-white md:gap-10 text-xl flex flex-col md:flex-row`}>
        <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(0)}>
          Home
        </Button>
        <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(1)}>
          Skill
        </Button>
        <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(2)}>
          Projects
        </Button>
        <Button variant="text" color="white" size="lg" onClick={() => handleCameraChange(3)}>
          Contact
        </Button>
      </ul>
    );
  }

  function MenuListMobile({ hidden, setCameraState, setToggleMenu }) {
    const handleCameraChange = (index) => {
      const positions = [
        { position: [0, -50, 5], target: [0, 0, 0] },
        { position: [50, 50, 50], target: [0, 0, 0] },
        { position: [-50, 20, -30], target: [0, 0, 0] },
        { position: [-50, 50, -30], target: [0, 0, 0] },
      ];
      setCameraState(positions[index]);
    };
  
    return (
      <ul className={`text-white md:gap-10 text-xl flex flex-col md:flex-row`}>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => {handleCameraChange(0); setToggleMenu(false)}}>
          Home
        </Button>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => {handleCameraChange(1); setToggleMenu(false)}}>
          Skill
        </Button>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => {handleCameraChange(2); setToggleMenu(false)}}>
          Projects
        </Button>
        <Button className='text-2xl' variant="text" color="white" size="lg" onClick={() => {handleCameraChange(3); setToggleMenu(false)}}>
          Contact
        </Button>
      </ul>
    );
  }

  function Navigator({ setCameraState }) {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <nav className="w-full fixed z-40">
        <div className="w-full h-24 p-5 flex justify-between items-center md:justify-center">
            <h1 className="text-white text-2xl w-full relative z-60">Marcos Gramajo._</h1>
            <div className='hidden md:flex'>
                <MenuList hidden={toggleMenu} setCameraState={setCameraState}/>
            </div>
            <div>
                <img src={Menu} alt="Menu" className='relative md:hidden' onClick={() => setToggleMenu(!toggleMenu)} />
            </div>
        </div>
        <div className={`${!toggleMenu ? 'hidden' : ''} md:hidden absolute w-screen h-screen bg-black/70 top-0 left-0`}>
            <div className="w-full h-24 p-5 flex justify-between items-center md:justify-center">
                <h1 className="text-white text-2xl w-full relative z-60">Marcos Gramajo._</h1>
                <div>
                    <img src={Menu} alt="Menu" className='relative md:hidden' onClick={() => setToggleMenu(!toggleMenu)} />
                </div>
            </div>
            <div className=''>
                <MenuListMobile hidden={false} setCameraState={setCameraState} setToggleMenu={setToggleMenu} />
            </div>
          </div>
      </nav>
    );
  }

export default Navigator;