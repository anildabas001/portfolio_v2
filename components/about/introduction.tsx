import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import my_image from '@/assets/images/my_image.jpeg';
import MainHeading from "../mainHeading";
import introductionData from '@/assets/data/introductionData.json';

export default function Introduction () {
    return(
        <Card elevation={2} sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', my: 2, flexWrap: 'wrap', padding: 2, borderRadius: 4, px: 6, pb: 4}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', mb: 2}}>
                {/* <MainHeading text="About Me" /> */}

                <Typography
                    variant="h4"
                    component="h4"
                    sx={{fontWeight: 300, mt: 2}}
                >
                    {introductionData.introductionHeading}
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                <Image style={{borderRadius: '50%'}} width={150} height={150} src={my_image} alt="Anil Dabas Photo" />
                
               
                <Typography
                    component="p"
                    textAlign={"justify"}
                >                    
                    {introductionData.introduction}<br/><br/>
                    {introductionData.educationIntroduction}   
                </Typography>
            </Box>
        </Card>
    );
}