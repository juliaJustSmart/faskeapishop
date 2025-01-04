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
                src="https://lottie.host/a6783df1-68c0-4f06-9b2c-6cb5a6f6f7ec/hUcTWrkbB0.lottie"
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
