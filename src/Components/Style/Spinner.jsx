import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Typography, Box } from '@mui/material';
import spinnerAnimation from './Animation - 1736031120789.json';

const Spinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#121212',
                color: 'white',
                padding: '20px',
            }}
        >
            <Player
                src={spinnerAnimation}
                loop
                autoplay
                style={{
                    width: '200px',
                    height: '200px',
                }}
            />
            <Typography
                variant="h5"
                align="center"
                sx={{
                    marginTop: '20px',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#00BFFF',
                    textShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
                }}
            >
                завантаження...
            </Typography>
        </Box>
    );
};

export default Spinner;
