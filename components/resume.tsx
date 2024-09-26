import { Box, Button, Paper } from "@mui/material";


export default function Resume () {
    return (
        <Paper elevation={0}>
            <Box>
                
                <Box>
                    <Button>
                        Show Resume
                    </Button>
                    <Button>
                        Download Resume
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}