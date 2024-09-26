'use client';

import { type ReactNode } from 'react';
import {
    Container,
    createTheme,
    ThemeProvider
} from '@mui/material';

const defaultTheme = createTheme({palette: {
    text: {
      primary: 'rgba(34, 34, 34, 0.8)', // Set the default text color to black
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#1976d2', // Set the default button text color to black
        },
      },
    },
    
}});
export default function ThemeWrapper ({children}: {children: ReactNode}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container sx={{overflow: 'hidden'}} component={"div"} maxWidth="lg">
                {children}
            </Container>
        </ThemeProvider>
    );
}    