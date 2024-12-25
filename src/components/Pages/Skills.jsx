import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import ReactIcon from '../../assets/Icons/react.svg'
import JSIcon from '../../assets/Icons/js.svg'
import BootstrapIcon from '../../assets/Icons/bootstrap.svg'
import CssIcon from '../../assets/Icons/css3.svg'
import ExpressIcon from '../../assets/Icons/express.svg'
import HtmlIcon from '../../assets/Icons/html.svg'
import MongoIcon from '../../assets/Icons/mongo.svg'
import MysqlIcon from '../../assets/Icons/mysql(1).svg'
import NodejsIcon from '../../assets/Icons/nodejs.svg'
import PythonIcon from '../../assets/Icons/python.svg'
import SassIcon from '../../assets/Icons/sass.svg'
import ScrumIcon from '../../assets/Icons/scrum.svg'
import TailwindIcon from '../../assets/Icons/tailwind.svg'
import TypescriptIcon from '../../assets/Icons/typescript.svg'
import XmlIcon from '../../assets/Icons/xml.svg'
import ThreeJsIcon from '../../assets/Icons/threejs.png'
import PhpIcon from '../../assets/Icons/php3.svg'
import OdooIcon from '../../assets/Icons/odoo.svg'
import KanbanIcon from '../../assets/Icons/Kanban.jpeg'

function CardsSkills() {
  const skills = [
    {
      "name": "JavaScript",
      "level": "Advance",
      "icon": JSIcon,
      "category": "Base"
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon,
      "category": "Library / Framework"
    },
    {
      "name": "Typescript",
      "level": "Medium",
      "icon": TypescriptIcon,
      "category": "Library / Framework"
    },
    {
      "name": "NodeJS",
      "level": "Medium",
      "icon": NodejsIcon,
      "category": "Base"
    },
    {
      "name": "Express",
      "level": "Medium",
      "icon": ExpressIcon,
      "category": "Library / Framework"
    },
    {
      "name": "Html",
      "level": "Medium",
      "icon": HtmlIcon,
      "category": "Base"
    },
    {
      "name": "Xml",
      "level": "Medium",
      "icon": XmlIcon,
      "category": "Base"
    },
    {
      "name": "ThreeJS",
      "level": "Medium",
      "icon": ThreeJsIcon,
      "category": "Library / Framework"
    },
    {
      "name": "MySQL",
      "level": "Medium",
      "icon": MysqlIcon,
      "category": "Data Base"
    },
    {
      "name": "MongoDB",
      "level": "Medium",
      "icon": MongoIcon,
      "category": "Data Base"
    },
    {
      "name": "CSS",
      "level": "Medium",
      "icon": CssIcon,
      "category": "Base"
    },
    {
      "name": "SASS",
      "level": "Medium",
      "icon": SassIcon,
      "category": "Library / Framework"
    },
    {
      "name": "Tailwind",
      "level": "Medium",
      "icon": TailwindIcon,
      "category": "Library / Framework"
    },
    {
      "name": "Bootstrap",
      "level": "Medium",
      "icon": BootstrapIcon,
      "category": "Library / Framework"
    },
    {
      "name": "Python",
      "level": "Medium",
      "icon": PythonIcon,
      "category": "Base"
    },
    {
      "name": "Scrum",
      "level": "Medium",
      "icon": ScrumIcon,
      "category": "Methodologies"
    },
    {
      "name": "PHP",
      "level": "Medium",
      "icon": PhpIcon,
      "category": "Base"
    },
    {
      "name": "Odoo",
      "level": "Medium",
      "icon": OdooIcon,
      "category": "CRM"
    },
    {
      "name": "Kanban",
      "level": "Medium",
      "icon": KanbanIcon,
      "category": "Methodologies"
    },
  ]

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-8 w-full">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category}>
          <h2 className="text-xl font-bold py-5 md:py-10 text-white">{category}</h2>
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-start gap-5 md:gap-x-20 md:gap-y-10 md:w-3/4">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="w-24 h-24 flex flex-col items-center rounded-full bg-gradient-radial shadow-white shadow-sm transition-shadow"
                >
                  <CardBody className="flex flex-col items-center">
                    <img src={skill.icon} loading="lazy" className="h-full max-h-8" />
                    <Typography variant="h3" color="blue-gray" className="text-center text-sm">
                      {skill.name}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Skills() {


  return (
    <figure className="relative w-full h-full">
      <figcaption className="absolute w-full h-full overflow-y-scroll no-scrollbar">
        <div className="flex flex-wrap justify-center">
          <CardsSkills/>
        </div>
      </figcaption>
    </figure>
  );
}

export default Skills