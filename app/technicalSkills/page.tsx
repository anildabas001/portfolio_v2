import MainHeading from "@/components/mainHeading";
import { Box } from "@mui/material";
import skills from '@/assets/images/skills.svg';
import Image, { StaticImageData } from "next/image";
import skillData from '@/assets/data/skills.json';
import htmlImage from '@/assets/images/html.svg';
import cssImage from '@/assets/images/css3.svg';
import webpackImage from '@/assets/images/webpack.svg';
import jsImage from '@/assets/images/javascript.svg';
import reactImage from '@/assets/images/react_frame.svg';
import typeScriptImage from '@/assets/images/typescript.svg';
import nodeImage from '@/assets/images/node.svg';
import mongodbImage from '@/assets/images/mongodb.svg';
import sqlImage from '@/assets/images/sql.svg';
import gitImage from '@/assets/images/git.svg';
import nextImage from '@/assets/images/next.svg';
import pythonImage from '@/assets/images/python.svg';
import djangoImage from '@/assets/images/django.svg';
import linuxImage from '@/assets/images/linux.svg';
import materialImage from '@/assets/images/mui.svg';
import tailwindImage from '@/assets/images/tailwind.svg';
import SkillCard from "@/components/skillCard";

type SkillImageKey = 
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "node"
  | "python"
  | "django"
  | "sql"
  | "mongodb"
  | "linux"
  | "materialUi"
  | "git"
  | "typescript"
  | "webpack"
  | "tailwind";

const imageMapping: Record<SkillImageKey, StaticImageData> = {
    "html": htmlImage,
    "css": cssImage,
    "js": jsImage,
    "react": reactImage,
    "next": nextImage,
    "node": nodeImage,
    "python": pythonImage,
    "django": djangoImage,
    "sql": sqlImage,
    "mongodb": mongodbImage,
    "linux": linuxImage,
    "materialUi": materialImage,
    "git": gitImage,
    "typescript": typeScriptImage,
    "webpack": webpackImage,
    "tailwind": tailwindImage,
}

export const metadata = {
    title: `Technical skills`,
    description: 'Technical Skills pof Anil Dabas'
}

export default function TechnicalSkills () {

    let typedSkillData = skillData as { 
        name: string;
        image: SkillImageKey 
    }[];
    
    return (
        <Box component="main" sx={{mb: 4}}>
            <Box sx={{display: 'flex', justifyContent:'flex-start', flexDirection: 'column', alignItems: 'flex-start', mb: 6}}>  
                <Image src={skills} alt="skills icon" width={165}  /> 
                <MainHeading text={"My Technical Skills: "} />                
            </Box>
            <Box sx={{display: 'flex', gap: 4, flexWrap: 'wrap', flexDirection: 'row', justifyContent: {xs: 'center', md: 'flex-start'}}}>
                {typedSkillData.map(skill => (<SkillCard key={skill.name} text={skill.name} imageObj={imageMapping[skill.image]} />))}
            </Box>            
        </Box>
    );
}