import { Box, Typography } from "@mui/material";

export default function MainHeading ({text}: {text: string}) {
    return (
        <Box>
            <Typography
                variant="h3"
                component="h3"
                sx={{color: 'rgba(35, 35, 35, 0.8)', fontWeight: 400, display: 'inline'}}
            >
                {text}
            </Typography>
        </Box>
    );
}