import MainHeading from "@/components/mainHeading";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import project_image from "@/assets/images/projects.svg";
import projectsData from '@/assets/data/projects.json';
import heyCartImage from '@/assets/images/heycart.png';
import tripTalesImage from '@/assets/images/tripTales.png';
import portfolioWebImage from '@/assets/images/portfolio_website.png';
import ProjectCard from "@/components/projectCard";

type ImageTypes = "heyCartImage" | "myPortfolio" | "tripTales";

let imageMapper: Record<ImageTypes, StaticImageData> = {
    "heyCartImage": heyCartImage,
    "myPortfolio": portfolioWebImage,
    "tripTales": tripTalesImage
}

type ProjectType = {
    projectName: string;
    description: string;
    image: ImageTypes;
    technologies: string;
    githubLink: string;
    liveLink: string
};

export default function Projects () {
    let typeProjectsData = projectsData as ProjectType[];

    return (
        <Box>
            <Image src={project_image} width={120} height={100} alt="projects icon"/>
            <MainHeading text="Projects:"/>
            <Box sx={{dsiplay: 'flex', gap: 2, mt: 2}}>
                {
                    typeProjectsData.map(project => <ProjectCard 
                        projectName={project.projectName} 
                        description={project.description}
                        image={imageMapper[project.image]}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />)
                }
            </Box>
        </Box>
    );
}