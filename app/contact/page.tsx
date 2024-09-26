import MainHeading from "@/components/mainHeading";
import { Box } from "@mui/material";
import Image from "next/image";
import contact from "@/assets/images/contact.svg";
import ContactForm from "./contactForm";

export const metadata = {
    title: 'Contact',
    description: 'Contact Info to connect with Anil Dabas'
}

export default function Contact () {
    return (
        <Box component="main" sx={{mb: 4}}>
            <Box sx={{display: 'flex', justifyContent:'flex-start', flexDirection: 'column', alignItems: 'flex-start', mb: 6}}>  
                <Image src={contact} alt="skills icon" width={165}  /> 
                <MainHeading text={"Lets Connect"} />                
            </Box>
            <ContactForm />            
        </Box>
    );
}