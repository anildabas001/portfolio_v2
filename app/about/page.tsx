import Introduction from "@/components/about/introduction";
import MainHeading from "@/components/mainHeading";
import { Box, Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import resume_image from '@/assets/images/resume_image.svg';
import Experience from "@/components/about/experience";

export const metadata = {
    title: "About me",
    description: "About me page of Anil Dabas's protfolio with introduction and "
}

export default function AboutMe () {    
    return (
        <Box>      
            <Image width={100} height={100} src={resume_image} alt="resume icon" />
            <MainHeading text="Introduction:" />             
            <Introduction />  
            <Experience />
        </Box>
    );
}