
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button, Container, Grid, Typography, styled } from "@mui/material";
import { useState } from 'react';
import Blockchain from "../BlockChain/BlockChain";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const StyledHero = styled("div")(({ theme }) => ({
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url("/img/VideointerCard.gif")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }));

    const SlideDown = styled("div")(({ theme }) => ({
        animation: isVisible ? `${theme.transitions.create('transform', {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut,
        })}, slide-down 1s forwards` : 'none',
        position: 'absolute',
        width:"150vh",
        top: 110,
        left: 210,
        right: 0,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Isso adiciona um fundo branco semi-transparente
        // Adicione mais estilos conforme necessário
        '@keyframes slide-down': {
            '0%': {
                transform: 'translateY(-100%)',
            },
            '100%': {
                transform: 'translateY(0)',
            },
        },
    }));
    return (
      <>
      <StyledHero>
        <Container maxWidth="lg" style={{marginTop:"-110px"}}>
            <Grid item xs={12} md={1}><img src="/img/logoInter.png" width={"10%"}  style={{marginLeft:"-40px",marginTop:"-0px"}}/></Grid>
            <Grid container spacing={2} style={{marginTop:"100px"}}>
                <Grid item xs={12} md={6} style={{display:"block"}}>
                    <Grid><Typography  variant="h1" style={{marginLeft:"30px", fontFamily:"sans-serif",fontSize:"75px"}}>Fácil, rápido</Typography></Grid>
                    <Grid display={"flex"}>
                        <Typography  variant="h1" style={{marginLeft:"30px",fontSize:"75px",fontFamily:"sans-serif"}}>e</Typography>
                        <Typography  variant="h1" style={{marginLeft:"30px",fontSize:"75px", fontWeight:"bold",fontFamily:"sans-serif"}}> gratuito.</Typography>
                    </Grid>
                    <Grid style={{marginTop:"15px"}}>
                        <Typography variant="h4"style={{marginLeft:"30px",fontSize:"40px",fontFamily:"sans-serif"}}>Cartão de crédito e</Typography>
                        <Typography variant="h4"style={{marginLeft:"30px",fontSize:"40px",fontFamily:"sans-serif",fontWeight:"normal",marginTop:"-10px"}}>conta digital para você</Typography>
                    </Grid>
                    <Button onClick={handleClick}>
                        <Typography style={{marginLeft:"30px",fontSize:"13px",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"10px", color:"GrayText"}}>Conheça a transferência BlockChain</Typography>
                        <ArrowCircleDownIcon style={{marginTop:"6px",marginLeft:"10px"}}/>
                    </Button>
                    {isVisible && <SlideDown><Blockchain/></SlideDown>}
                </Grid>
            </Grid>
        </Container>
        </StyledHero>
        
      </>
    )
  }
  
  export default Hero;
