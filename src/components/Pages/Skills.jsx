import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import ReactIcon from '../../assets/Icons/react.svg'

export function Skills() {

  const skills = [
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
    },
    {
      "name": "ReactJS",
      "level": "Medium",
      "icon": ReactIcon
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