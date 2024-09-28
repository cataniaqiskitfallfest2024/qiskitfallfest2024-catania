import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Link from 'next/link';

export default function page() {
    return (
        <div className='bg-[#F4F4F4]'>
            <Navbar />
            <div className='flex justify-center mb-16'>
                <div className='min-w-[70%] max-w-[70%] mt-32 mb-10 '>
                    <h1 className='text-6xl font-bold text-center text-[#9D5CFD]'>FAQ</h1>
                    <div className='mt-10 font-bold'>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                How to register?
                            </AccordionSummary>
                            <AccordionDetails>
                                The event is open to everyone, you can register <Link href={'https://www.eventbrite.com/e/catania-qiskit-fall-fest-tickets-1029219452087'} className='underline font-bold'>here.</Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            What is the expected level of quantum computing knowledge for attendees?
                            </AccordionSummary>
                            <AccordionDetails>
                                No prior knowledge of QC is required, but surely already having basics of linear algebra make it easy to understand the topics. If you don’t already know the axioms of quantum mechanics, no problem, we will explain them briefly!
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            What should I bring or prepare before attending the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            Your personal laptop (with power supply) and a lot of curiosity. Furthermore, we will send you some material to view before the event, so as to better prepare you for this exciting experience!
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            Will there be hands-on sessions?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, there will be 3 LAB sessions
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Will there be a Q&A session or a way to ask questions during the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            In-presence partecipants can ask questions during the Event at our Speakers.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Will participating students be awarded CFUs?
                            </AccordionSummary>
                            <AccordionDetails>
                            1.5 CFU will be awarded to students of degree courses at the University of Catania. In any case, you will be issued a certificate of attendance with which you can request recognition of credits from the coordinator of your degree course.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             How can I stay updated on event announcements and news?
                            </AccordionSummary>
                            <AccordionDetails>
                           You can follow us on <Link href={'https://www.instagram.com/cataniaqiskitfallfest/'} className='underline font-bold'> IG </Link> and stay updated constantly
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Can I bring guests or colleagues with me to the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            Of course, guests are allowed, but make sure they are also registered for the event as places in-presence are limited.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <p className='text-center text-lg p-5 text-[#9D5CFD]'>For any other questions contact us via the <Link href={'/contacts'} className='underline font-bold'>contact page</Link></p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
