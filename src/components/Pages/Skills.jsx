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

export function Skills() {

  const skills = [
    {
      "name": "JavaScript",
      "level": "Advance",
      "icon": JSIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "Typescript",
      "level": "Medium",
      "icon": TypescriptIcon
    },
    {
      "name": "NodeJS",
      "level": "Medium",
      "icon": NodejsIcon
    },
    {
      "name": "Express",
      "level": "Medium",
      "icon": ExpressIcon
    },
    {
      "name": "Html",
      "level": "Medium",
      "icon": HtmlIcon
    },
    {
      "name": "Xml",
      "level": "Medium",
      "icon": XmlIcon
    },
    {
      "name": "ThreeJS",
      "level": "Medium",
      "icon": ThreeJsIcon
    },
    {
      "name": "MySQL",
      "level": "Medium",
      "icon": MysqlIcon
    },
    {
      "name": "MongoDB",
      "level": "Medium",
      "icon": MongoIcon
    },
    {
      "name": "CSS",
      "level": "Medium",
      "icon": CssIcon
    },
    {
      "name": "SASS",
      "level": "Medium",
      "icon": SassIcon
    },
    {
      "name": "Tailwind",
      "level": "Medium",
      "icon": TailwindIcon
    },
    {
      "name": "Bootstrap",
      "level": "Medium",
      "icon": BootstrapIcon
    },
    {
      "name": "Python",
      "level": "Medium",
      "icon": PythonIcon
    },
    {
      "name": "Scrum",
      "level": "Medium",
      "icon": ScrumIcon
    },
    {
      "name": "PHP",
      "level": "Medium",
      "icon": PhpIcon
    },
  ]


  return (
    <figure className="relative w-full h-full">
      <figcaption className="absolute w-full h-full overflow-y-scroll no-scrollbar border-white bg-white/10">
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((element) => (
            <Card className="max-w-[300px] w-full flex flex-col items-center rounded-none">
            <CardBody className="flex flex-col items-center">
              <img src={element.icon} className="w-1/3" />
              <Typography variant="h3" color="blue-gray" className="text-center">
              {element.name}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography variant="h4">
              {element.level}
              </Typography>
            </CardFooter>
          </Card>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export default Skills