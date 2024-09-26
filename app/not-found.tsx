import { Box, Typography } from "@mui/material";
import Image from "next/image";
import notFound from '@/assets/images/not-found.svg'

export default function NotFound () {
    return(
        <Box sx={{display: 'flex', gap: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', height: '50vh'}}>
            <Image src={notFound} width={265} alt="Anil's portfolio's icon" />
            <Typography
                component="h3"
                variant="h3"
                sx={{fontSize: {xs: '2rem', md: '3rem'}}}
            >
                Sorry, not able to find the page.
            </Typography>            
        </Box>
    )
}