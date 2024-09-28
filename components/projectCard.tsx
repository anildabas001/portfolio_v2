import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Image, {type StaticImageData} from "next/image";

export type ProjectType = {
    projectName: string;
    description: string;
    image: StaticImageData;
    technologies: string;
    githubLink: string;
    liveLink: string
};

export default function ProjectCard({projectName, description, image, technologies, githubLink, liveLink}: ProjectType) {
    let techStack = (<Stack direction="row" flexWrap={'wrap'} spacing={2}>
        {
            technologies.split(',').map(technology => (
                <Chip label={technology} />
            ))
        }
    </Stack>);

    return (
        <Paper elevation={2} sx={{display: 'flex', p: 2, width: '100%', height: '310px', gap: 2, borderRadius: 4, my: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                <Typography 
                    component="h5"
                    variant="h5"
                    sx={{fontWeight: 400, textAlign: 'center'}}
                >
                    {projectName}
                </Typography>
                <Image src={image} width={250} height={250}  alt={`${projectName} sample image`} />
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 2, justifyContent: 'center'}}>
                <Typography 
                    component="p"
                >
                    {description}
                </Typography>
                {techStack}
            </Box>
            
            
            
            
        </Paper>
    )
}