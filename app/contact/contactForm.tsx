import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormButton from "./formButton";
import Form from "./form";

export default function ContactForm () {
    return (
        <Paper elevation={2} sx={{minHeight: '60vh', p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', border: '1px solid rgba(35, 35, 35, 0.8)', borderRadius: 4}}>
            <Box component="div" sx={{p: 1, display: 'flex', width: '100%', justifyContent: 'center', gap: 8, flex: 1}}>
                <a href="mailto:anil.dabas93@outlook.com" target='_blank'><ContactMailIcon sx={{fontSize: '2.4rem', color: 'rgba(35, 35, 35, 0.8)'}} /></a>
                <a href="https://github.com/anildabas001" target='_blank'><GitHubIcon sx={{fontSize: '2.4rem', color: 'rgba(35, 35, 35, 0.8)'}} /></a>
                <a href="https://www.linkedin.com/in/anil-dabas-b082051b0/" target='_blank'><LinkedInIcon sx={{fontSize: '2.4rem', color: 'rgba(35, 35, 35, 0.8)'}} /></a>
            </Box>
            <Divider sx={{border: '1px solid rgba(35, 35, 35, 0.1)', width: '100%'}} />
            <Typography
                variant="h3"
                component="h3"
                sx={{fontWeight: 300, m: 2}}
            >
                Contact Form
            </Typography>
            <Form sx={{p: 4, px: 12, display: 'flex', gap: 4, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  id="name"
                  label="Your Name"
                />

                <TextField
                  required
                  fullWidth
                  name="email"
                  id="email"
                  label="Your Email"
                  type="email"
                />

                <TextField
                  id="message"
                  name="message"
                  label="Your Message"
                  fullWidth
                  placeholder=""
                  multiline
                  rows={5}
                />

                <FormButton />

            </Form>
        </Paper>
        
    )
}