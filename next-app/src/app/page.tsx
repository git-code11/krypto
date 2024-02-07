'use client';
//import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import aller from '@/fonts/Aller';
import bebas_neue from '@/fonts/Bebas_Neue';
import FaqBox from '@/components/FaqBox';
import TeamCard from '@/components/TeamCard';
import ContactCard from '@/components/ContactCard';


export default function HomePage() {
  const isDesktop = useMediaQuery(theme=>theme.breakpoints.up('md'));
  
  return (
    <>

    {/** FIRST PAGE */}
    <Box sx={{
      //bgcolor:"#000",
      mt: ['-48px', '-56px', '-64px'],
      position:"relative",
    }}>

      <Box 
        sx={{ 
          width:"100vw",
          height:{
            xs:"100vmin",
            md: "100vh"
          },
          position:"absolute",
          right:0,
          top:0,
          //bgcolor:"rgba(0,0,0,0.34)",
          backgroundImage:"url(/assets/chain_bg.png)",
          backgroundSize:"cover",
          backgroundPosition:"top",
          backgroundRepeat:"no-repeat",
          display:"grid",
          placeItems:"center",
          justifyContent:"end",
        }}
      >
        <Avatar 
          variant="square"
          src="/assets/chain_fg.png" 
          sx={{
            //mr:5,
            mt:5,
            width:"100vmin",
            height:"auto"
          }}
        />
      </Box>

      <Stack
        useFlexGap
        justifyContent="center"
        sx={{
          p:(isDesktop?10:4),
          pt:(isDesktop?10:5),
          minHeight:"100vmin",
          position:"relative",
        }}>
        <Box>
          <Typography
            component="h1"
            variant={isDesktop?"h3":"h5"}
            sx={{
              fontWeight:700,
              maxWidth:"100vmin",
              color:"#fff",
              textTransform:"capitalize",
              lineHeight:1.15,
              fontFamily:aller.style.fontFamily
            }}
            >
              <span>Lorem ipsum dolor sit amet </span>
              <Box component="span" sx={{color:"#d19421"}}>consectetur</Box>
              <span> adipisicing</span>
            </Typography>
          <Typography
            sx={{
              fontWeight:300,
              my:isDesktop?4:2,
              maxWidth:"95vmin",
              color:"#84e4a4",
              fontFamily:aller.style.fontFamily,
              textShadow:"-1px 2px 1px #2a56db"
            }}
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure enim, ipsum doloribus quo voluptatem soluta fugit omnis explicabo maxime dolorum ab ea reprehenderit. Hic, officia?</Typography>
          
          <Stack direction="row" spacing={4}>
            <Button
              size="large"
              variant="contained"
              sx={{
                bgcolor:"#fff",
                color:"#00001c",
                fontWeight:700
              }}
              >Lorem ipsum</Button>
            {/* <Button
            size="large"
            variant="contained"
            >Lorem ipsum</Button> */}
          </Stack>
        </Box>
      </Stack>
      
    </Box>
    
    {/** SECOND PAGE */}
    <Box
      sx={{
        //bgcolor:"#000",
        color:"#fff",
        minHeight:"100vh",
        py:3,
        overflowY:"hidden"
      }}
      >
        <Typography
          sx={{
            fontSize:52,
            //pt:5,
            mb:6,
            textAlign:"center",
            fontFamily:bebas_neue.style.fontFamily
          }}
          >Our Team</Typography>
        
        <Container>
        <Grid container
          rowSpacing={6}
          columnSpacing={4}
          justifyContent="center"
          >
          {Array(6).fill(0).map(
            i=>
            <Grid key={i}>
              <TeamCard/>
            </Grid>
          )}
        </Grid>
        </Container>
    </Box>

     {/** THRID PAGE */}
    <Box>
      <Typography
        sx={{
          fontSize:52,
          //pt:5,
          mb:2,
          textAlign:"center",
          fontFamily:bebas_neue.style.fontFamily,
          color:"#fff"
        }}
        >Partners</Typography>
      <Stack 
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        spacing={3}
        sx={{
          overflowX:"hidden"
        }}
        >
        {Array(5).fill(0).map(
          i=>
          <Avatar 
            key={i}
            variant="square"
            src="/assets/partner.png"
            sx={{
              width:"auto",
              maxWidth:150,
              height:"auto"
            }}  
            />
          )}
      </Stack>
    </Box>

    {/** THRID PAGE */}
    <Box
      sx={{
        backgroundImage:"url(/assets/faq_bg.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
        //backgroundPosition:"bottom left",
        minHeight:"100vmin"
      }}
    >
      
      <Typography
        sx={{
          fontSize:64,
          mb:1,
          textAlign:"center",
          fontFamily:bebas_neue.style.fontFamily,
          color:"#fff"
        }}
        >FAQ</Typography>
      
      <Stack
        component={Container}
        xs="sm"
        justifyContent="center"
        sx={{
           backgroundImage:"#00071cc7"
        }}
        >
        {Array(5).fill(0).map(i=><FaqBox key={i}/>)}
      </Stack>
      
    </Box>
  
    {/*** FOURTH PAGE */}
    <Box
      sx={{
        display:"grid",
        placeItems:"center",
        minHeight:"100vmin",
      }}
      >
      <ContactCard/>
    </Box>
    </>
  );
}
