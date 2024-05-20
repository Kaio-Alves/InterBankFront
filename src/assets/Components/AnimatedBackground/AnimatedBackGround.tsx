import { Box } from "@mui/material";


const AnimatedBackground = () => {
    
    return (
      <>
        <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
      >
        <source src="/public/img/VideointerCard.mp4" type="video/mp4" />
      </video>
    </Box>
      </>
    )
  }
  
  export default AnimatedBackground
  