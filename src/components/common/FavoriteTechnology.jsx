import { FaReact, FaGithub } from "react-icons/fa";
import { SiAstro, SiTypescript, SiJavascript, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFigma } from "react-icons/fa6";


import ToolTipItem from "../reusable/ToolTipItem";

const FavoriteTechnologys = [{
    name: "React",
    icon: FaReact
},
{
    name: "Astro",
    icon: SiAstro
},{
    name: "TypeScript",
    icon: SiTypescript
},{
    name: "JavaScript",
    icon: SiJavascript
},{
    name: "Tailwind CSS",
    icon: RiTailwindCssFill
},{
    name: "Git",
    icon: FaGitAlt
},{
    name: "Github",
    icon: FaGithub
},{
    name: "Supabase",
    icon: RiSupabaseFill
},{
    name: "Express",
    icon: SiExpress
},{
    name: "PostgreSQL",
    icon: BiLogoPostgresql
},{
    name: "Figma",
    icon: FaFigma
}]


const FavoriteTechnology = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-3">
        {FavoriteTechnologys.map((technology, index) => (
            <ToolTipItem key={index} content={technology.name}>
                <technology.icon className="fill-grayLight size-7 hover:fill-white transition-colors duration-300 hover:scale-110" />
            </ToolTipItem>
        ))}
    </div>
  )
}

export default FavoriteTechnology