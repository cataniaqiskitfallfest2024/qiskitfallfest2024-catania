import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebSiteIcon from '@mui/icons-material/Language';
import Link from 'next/link';

const Speakers = () => {
    return (
        <section id='speakers' className='p-5'>
            <div className="flex flex-col justify-center ">
                <h1 className="text-6xl font-bold text-center mt-5 text-[#353A3F]">Invited Speakers</h1>
            </div>
            <div className='flex justify-around md:gap-y-4 md:gap-x-4 flex-wrap md:px-11 mt-10'>
                <Card sx={{ maxWidth: 200, minHeight: 400, bgcolor: 'white', boxShadow: 'none' }} align='center'>
                    <CardMedia
                        component="img"
                        alt="Simone Faro"
                        image="/cataniaqiskitfallfest/assets/profilePic/simone_faro.jpg"
                        sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            Simone Faro
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Associate Professor @ Department of Mathematics and Computer Science, University of Catania.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>

                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 200, minHeight: 400, bgcolor: 'white', boxShadow: 'none' }} align='center'>
                    <CardMedia
                        component="img"
                        alt="Elisabetta Paladino"
                        image="/cataniaqiskitfallfest/assets/profilePic/elisabetta_paladino.jpg"
                        sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            Elisabetta Paladino
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Associate Professor @ Department of Physics and Astronomy, University of Catania.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>

                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 200, minHeight: 400, bgcolor: 'white', boxShadow: 'none' }} align='center'>
                    <CardMedia
                        component="img"
                        alt="Giuliano Chiriacò"
                        image="/cataniaqiskitfallfest/assets/profilePic/giuliano_chiriaco.jpg"
                        sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            Giuliano Chiriacò
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Researcher @ Department of Physics and Astronomy, University of Catania
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>

                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 200, minHeight: 400, bgcolor: 'white', boxShadow: 'none' }} align='center'>
                    <CardMedia
                        component="img"
                        alt="Francesco Schillirò"
                        image="/cataniaqiskitfallfest/assets/profilePic/francesco_schilliro.jpg"
                        sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            Francesco Schillirò
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Leading Technologist @ INAF Catania Astrophysical Observatory
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>

                    </CardActions>
                </Card>
            </div>
        </section>
    )
}

export default Speakers