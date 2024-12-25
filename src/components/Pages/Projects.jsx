import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import RadiadoreGM from '../../assets/projects/RadiadoresGM.png'
import CG from '../../assets/projects/CG.jpg'
import CocaCola from '../../assets/projects/CocaCola.png'
import GuillanaAutomotores from '../../assets/projects/GuillanaAutomotores.png'
import GHTucuman from '../../assets/projects/GHTucuman.jpg'

import ReactIcon from '../../assets/Icons/react.svg'
// import JSIcon from '../../assets/Icons/js.svg'
// import BootstrapIcon from '../../assets/Icons/bootstrap.svg'
import CssIcon from '../../assets/Icons/css3.svg'
import ExpressIcon from '../../assets/Icons/express.svg'
// import HtmlIcon from '../../assets/Icons/html.svg'
import MongoIcon from '../../assets/Icons/mongo.svg'
// import MysqlIcon from '../../assets/Icons/mysql(1).svg'
// import NodejsIcon from '../../assets/Icons/nodejs.svg'
// import PythonIcon from '../../assets/Icons/python.svg'
// import SassIcon from '../../assets/Icons/sass.svg'
// import ScrumIcon from '../../assets/Icons/scrum.svg'
import TailwindIcon from '../../assets/Icons/tailwind.svg'
import TypescriptIcon from '../../assets/Icons/typescript.svg'
// import XmlIcon from '../../assets/Icons/xml.svg'
import ThreeJsIcon from '../../assets/Icons/threejs.png'
// import PhpIcon from '../../assets/Icons/php3.svg'
// import OdooIcon from '../../assets/Icons/odoo.svg'
// import KanbanIcon from '../../assets/Icons/Kanban.jpeg'

function Projects(){

    const proyects = [
        {
            "name": "Radiadore Gramajo Moreira",
            "description": "My first landing with react and small implementes",
            "img": RadiadoreGM,
            "gitHub": "https://github.com/MarcosGramajo-dev/PaginaRadiadores",
            "web": "https://radiadoresgm.com.ar/",
            "tecologies": [ReactIcon, TailwindIcon]
        },
        {
            "name": "ThreeJS",
            "description": "First implement ThreeJS with .stl file",
            "img": CG,
            "gitHub": "https://github.com/MarcosGramajo-dev/PaginaRadiadores",
            "web": "https://cinthyagramajo.netlify.app/",
            "tecologies": [ReactIcon, TailwindIcon, ThreeJsIcon]
        },
        {
            "name": "Coca Cola",
            "description": "Implement ThreeJS",
            "img": CocaCola,
            "gitHub": "https://github.com/MarcosGramajo-dev/Portfolio",
            "web": "https://cocacolatin.netlify.app/",
            "tecologies": [ReactIcon, TailwindIcon, ThreeJsIcon]
        },
        {
            "name": "Guilliana Autotmores",
            "description": "Catalogue online",
            "img": GuillanaAutomotores,
            "gitHub": "https://github.com/MarcosGramajo-dev/FrontEcommers",
            "web": "https://ecommersagency.netlify.app",
            "tecologies": [ReactIcon, TypescriptIcon, TailwindIcon, ExpressIcon, MongoIcon]
        },
        {
            "name": "GH Tucuman",
            "description": "A votation system mercadopago API integration for payment",
            "img": GHTucuman,
            "gitHub": "https://github.com/MarcosGramajo-dev/ghTucuman",
            "web": "https://ghtucuman.com.ar/",
            "tecologies": [ReactIcon, CssIcon, ExpressIcon]
        },
    ]

    return(
        <figure className="relative w-full h-full">
            <figcaption className="absolute w-full h-full overflow-y-scroll no-scrollbar">
            <div className="flex flex-wrap justify-center md:gap-10">
                {proyects.map((element) => (
                    <Card key={element.name} className="mt-6 max-w-md min-w-80 bg-white/30 border border-white">
                        <Typography variant="h4" color="white" className="text-center py-2"> {element.name} </Typography>
                        <CardBody className='py-0'>
                        
                        <img alt='proyect' src={element.img} />
                            <h4 className='py-2 text-white'>{element.description}</h4>
                        </CardBody>
                        <CardFooter className='w-full flex flex-col items-center p-4 gap-4'>
                        <div className='flex justify-center items-center gap-2 px-6'>
                            {element.tecologies.map((img) =>(
                                <div key={img} className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:slide-top">
                                    <img alt='icon' className='w-8' src={img} loading="lazy"/>
                                </div>
                            ))}
                        </div>
                            
                        <div className='w-full flex justify-end items-center mt-2 pr-4 gap-4'>
                            <Button onClick={ () => window.open(element.gitHub, '_blank')} variant="filled" color="white" className="flex items-center"> GITHUB </Button>
                            <Button onClick={ () => window.open(element.web, '_blank')} variant="filled" color="white" className="flex items-center"> WEB </Button>
                        </div>
                        </CardFooter>
    
                    </Card>
                ))}
            </div>
            </figcaption>
        </figure>
    )
  }

export default Projects;