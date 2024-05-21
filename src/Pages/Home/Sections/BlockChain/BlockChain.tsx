import ForwardIcon from '@mui/icons-material/Forward';
import { Box, Button, Container, Grid, TextField, Typography, styled } from "@mui/material";



const Blockchain = () => {
    const StyledBlockChain = styled("div")(({theme})=> ({
        height:"70vh",
        display:"flex",
        alignItems:"center",
        // Isso adiciona um fundo branco semi-transparente
        [theme.breakpoints.up('xs')]:{
            paddingTop:"100px"
        },
        [theme.breakpoints.up('md')]:{
            paddingTop:"0"
        }
    }));
    return (
      <>
      <StyledBlockChain>
        <Container maxWidth="lg" style={{marginTop:"-110px"}}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={6}>
                    <Typography variant="h4" style={{marginLeft:"105px",marginTop:"130px"}}>Dados</Typography>
                    <Grid style={{marginTop:"20px",marginLeft:"40px"}}>
                        <TextField id="cpf" label="CPF remetente" variant="outlined" style={{marginBottom:"10px"}}/>
                        <TextField id="cpf" label="Agencia remetente" variant="outlined" style={{marginBottom:"10px"}}/>
                        <TextField id="cpf" label="CPF destinatário" variant="outlined" style={{marginBottom:"10px"}}/>
                        <TextField id="cpf" label="Agencia destinatário" variant="outlined" style={{marginBottom:"10px"}}/>
                        <TextField id="valor" label="Valor" variant="outlined" style={{marginBottom:"10px"}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} style={{marginTop:"330px",marginLeft:"-20px"}}>
                    <Button style={{marginLeft:"-90px"}}><ForwardIcon/></Button>
                </Grid>
                <Grid item xs={4} md={5}>
                    <Grid style={{marginTop:"15px"}}>
                        <Typography variant="h4" style={{marginLeft:"90px",marginTop:"130px"}}>BlockChain</Typography>
                        <Box style={{ border: '2px groove rgba(239, 239, 240)', height:"50vh",marginTop:"20px",marginLeft:"-30px" }}>kaio</Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        
      </StyledBlockChain>
      </>
    )
  }
  
  export default Blockchain
  