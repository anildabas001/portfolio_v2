'use client'
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import programmer_image from '@/assets/images/programming_header.svg';
import Typewriter from 'typewriter-effect';
import introductionData from '@/assets/data/introductionData.json';

export default function Home() {
  return (
    <Box component="main">
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', height: '85vh'}}> 
        {/* Left Side with Typewriter Effect */}
        <Box sx={{alignSelf: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100vh', flexShrink: 1}}> 
          <Typography
            variant="h4"
            component={"h4"}
            sx={{ fontWeight: 300, color: 'rgba(34, 34, 34, 0.8)' }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(introductionData.mainPageHeading)
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(1000)
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
              options={{
                delay: 75,
                autoStart: true,
                loop: false
              }}
            />
          </Typography>
        </Box>

        {/* Right Side Image */}
        <Box sx={{position: 'relative', flexGrow: 1}}>
          <Image src={programmer_image} fill alt="header image of a programmer" />
        </Box>      
      </Box>
    </Box>
  );
}
