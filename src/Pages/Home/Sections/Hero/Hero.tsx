import { Container, Grid, Typography, styled } from "@mui/material";
import AnimatedBackground from "../../../../assets/Components/AnimatedBackground/AnimatedBackGround";


const Hero = () => {
    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor:theme.palette.primary.contrastText,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{
            paddingTop:"100px"
        },
        [theme.breakpoints.up('md')]:{
            paddingTop:"0"
        }
    }));
    return (
      <>
        <AnimatedBackground/>
        <Container maxWidth="lg">
            <Grid item xs={12} md={1}><img src="/public/img/logoInter.png" width={"10%"}  style={{marginLeft:"-50px",marginTop:"20px"}}/></Grid>
            <Grid container spacing={2} style={{marginTop:"150px"}}>
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
                </Grid>
            </Grid>
        </Container>
      </>
    )
  }
  
  export default Hero
  