import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Typography, Box } from '@mui/material';

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
            <DotLottieReact
                src="https://lottie.host/f710b6a3-2c90-4386-8501-89ee5e393165/k55h4npkdE.lottie"
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
                Йде завантаження магазину
            </Typography>
        </Box>
    );
};

export default Spinner;
