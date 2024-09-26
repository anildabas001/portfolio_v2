
import { Box, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

export default function SkillCard ({imageObj,text}: {imageObj: StaticImageData, text: string}) {
    return (
        <Paper elevation={2} sx={{borderRadius: 5}}>
            <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column', p: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Image width={90} height={90} src={imageObj} alt={`image of ${text}`} />
                <Typography
                    component="p"
                    textAlign="center"
                >
                    {text}
                </Typography>
            </Box>
        </Paper>
    );
}