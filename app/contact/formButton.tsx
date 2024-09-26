'use client';

import { Button } from '@mui/material';
import { useFormStatus } from 'react-dom'

export default function FormButton () {
    const {pending} = useFormStatus();

    return (
        <Button
            disabled={pending}
            variant="contained"
            type="submit"
            sx={{backgroundColor: 'rgba(35, 35, 35, 0.8)', borderColor: 'rgba(35, 35, 35, 0.8)', width: '30%', color: '#fff'}}
        >
            Send Message
        </Button>
    );
}