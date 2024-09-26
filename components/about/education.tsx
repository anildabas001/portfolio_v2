"use client";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import { Box, Paper, Typography } from "@mui/material";

function EducationTamplate ({company, position, location}: {company: string; position: string; location: string;}) {
    return (
        <Paper elevation={4} sx={{display: 'flex', flexDirection: 'column', p: 1, justifyContent: 'flex-start', borderRadius: 4}}>
            <Typography
                component="h5"
                variant="h5"
                sx={{fontWeight: 400, mb: 1}}
            >
                {company}
            </Typography>

            <Typography
                component="p"
                sx={{fontWeight: 300}}
            >
                {position}
            </Typography>

            <Typography
                component="p"
                sx={{fontWeight: 300}}
            >
                {location}
            </Typography>
        </Paper>
    );
}

export default function Education() {
    return (
        <Paper elevation={2} sx={{p: 4, my: 4, borderRadius: 4}}>
            <Box component="div" sx={{minHeight: '400px'}}>
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{fontWeight: 300, textAlign: 'center', mb: 3}}
                >
                    Work Experience
                </Typography>

                <Box component="div" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Timeline position="alternate">
                      <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                          May 2021 - May 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><EducationTamplate company="Cheetah Networks" position="Frontend Software Engineer" location="Ottawa, Canada"/></TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                          September 2020 - December 2020
                                      </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><EducationTamplate company="Descartes Systems Group" position="Intern Software Developer" location="Waterloo, Canada"/></TimelineContent>
                      </TimelineItem>                                            
                    </Timeline>                   
                </Box>
            </Box>            
        </Paper>
    );
}