import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebSiteIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const Organizers = () => {
  return (
    <section id='organizers' className=' bg-[#F4F4F4] mt-5 p-5'>
        <div className="flex flex-col justify-center md:m-5">
          <h1 className="text-6xl font-bold text-center text-[#9D5CFD]">Organizers</h1>
        </div>
        <div className='flex justify-around md:gap-y-4 md:gap-x-4 flex-wrap md:px-11 mt-10'>
        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Caterina Viola"
                image="/cataniaqiskitfallfest/assets/profilePic/caterina_viola.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Caterina Viola
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Researcher @ Department of Mathematics and Computer Science, University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
                <Link href={'https://web.dmi.unict.it/docenti/caterina.viola'}>
                    <Button size="small"><WebSiteIcon className="text-[#9D5CFD]" >
                        </WebSiteIcon>
                    </Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Giulia Piccitto"
                image="/cataniaqiskitfallfest/assets/profilePic/giulia_piccitto.jpeg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Giulia Piccitto
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Researcher @ Department of Mathematics and Computer Science, University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://web.dmi.unict.it/docenti/giulia.piccitto'}>
                <Button size="small"><WebSiteIcon className="text-[#9D5CFD]" >
                    </WebSiteIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Elenoire Scaletta"
                image="/cataniaqiskitfallfest/assets/profilePic/elenoire_scaletta.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Elenoire Scaletta
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                B.Sc. Student in Computer Science @ University of Catania 
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" ></LinkedInIcon></Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Miriana Russo"
                image="/cataniaqiskitfallfest/assets/profilePic/miriana_russo.jpeg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Miriana Russo
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Master's Student in Computer Science @ University of Catania 
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
                <Link href={'https://www.linkedin.com/in/miriana-russo-07987a217/'}>
                    <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                        </LinkedInIcon>
                    </Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Mirko Russo"
                image="/cataniaqiskitfallfest/assets/profilePic/mirko_russo.JPG"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Mirko Russo
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                 Master's Student in Computer Science @ University of Catania 
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.linkedin.com/in/mirkorussodev/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link href={'https://github.com/MirkoRusso'}>
                <Button size='small'>
                    <GitHubIcon className="text-[#9D5CFD]" >
                    </GitHubIcon>
                </Button>
            </Link>
            </CardActions >
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Gabriele Messina"
                image="/cataniaqiskitfallfest/assets/profilePic/gabriele_messina.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Gabriele Messina
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                 Master's Student in Computer Science @ University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.linkedin.com/in/messina-gabriele/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link href={'https://github.com/GabrieleMessina'}>
                <Button size="small"><GitHubIcon className="text-[#9D5CFD]" >
                    </GitHubIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Marco Gionfriddo"
                image="/cataniaqiskitfallfest/assets/profilePic/marco_gionfriddo.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                Marco Gionfriddo
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Master's Student in Computer Science @ University of Catania
                </Typography>
            </CardContent >
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.instagram.com/marcoging/'}>
                <Button size="small"><InstagramIcon className="text-[#9D5CFD]" >
                    </InstagramIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Martin Gibilterra"
                image="/cataniaqiskitfallfest/assets/profilePic/martin_gibilterra.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'top', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Martin Gibilterra
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Master's Student in Computer Science @ University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.linkedin.com/in/w8floosh/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link href={'https://www.instagram.com/w8floosh/'}>
                <Button size="small"><InstagramIcon className="text-[#9D5CFD]" >
                    </InstagramIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Antonio Scardace"
                image="/cataniaqiskitfallfest/assets/profilePic/antonio_scardace.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Antonio Scardace
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Master's Student in Computer Science @ University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.linkedin.com/in/antonio-scardace/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link href={' https://github.com/antonioscardace/   '}>
                <Button size="small"><GitHubIcon className="text-[#9D5CFD]" >
                    </GitHubIcon>
                </Button>
            </Link>
            <Link href={'https://www.instagram.com/antonioscardace__/'}>
                <Button size="small"><InstagramIcon className="text-[#9D5CFD]" >
                    </InstagramIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'#F4F4F4', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Andrea Pricoco"
                image="/cataniaqiskitfallfest/assets/profilePic/andrea_pricoco.jpeg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Andrea Pricoco
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                B.Sc. Student in Computer Science @ University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link href={'https://www.instagram.com/andrea_pricoco/'}>
                <Button size="small"><InstagramIcon className="text-[#9D5CFD]" >
                    </InstagramIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>



        </div>
    </section>
  )
}

export default Organizers