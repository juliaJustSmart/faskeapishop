import { Typography, Button, Box } from "@mui/material";
import {Grid} from "@mui/system";

const Footer = () => (
    <Box
        style={{
            backgroundColor: 'rgba(0,10,17,0.87)',
            color: 'white',
            padding: '30px',
            width: '100%',
            marginTop: 'auto'
    }}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={4}>
                <Typography
                    variant="h6"
                    align="left"
                    sx={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 'bold',
                        fontSize: window.innerWidth <= 768 ? '1.3rem': '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#00BFFF',
                        textShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
                    }}
                >
                   Створено на базі React
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} container justifyContent="center">
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#FFFFFF',
                    }}
                >
                    © 2024. All Rights Reserved.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} container justifyContent="flex-end">
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            marginBottom: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            color: '#FFFFFF',
                        }}
                    >
                        Використані бібліотеки:
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="https://mui.com/"
                        target="_blank"
                        sx={{
                            backgroundColor: '#00BFFF',
                            '&:hover': {
                                backgroundColor: '#009ACD',
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        MUI
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="https://react-bootstrap.github.io/"
                        target="_blank"
                        sx={{
                            backgroundColor: '#6f42c1',
                            '&:hover': {
                                backgroundColor: '#5a2c9b',
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        React Bootstrap
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        href="https://lottiefiles.com/"
                        target="_blank"
                        sx={{
                            backgroundColor: '#32CD32',
                            '&:hover': {
                                backgroundColor: '#2e8b57',
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        React Lottie
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        href="https://fkhadra.github.io/react-toastify/"
                        target="_blank"
                        sx={{
                            backgroundColor: '#FF6347',
                            '&:hover': {
                                backgroundColor: '#e5533e',
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        React Toastify
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        href="https://sass-lang.com/"
                        target="_blank"
                        sx={{
                            backgroundColor: '#FF9800',
                            '&:hover': {
                                backgroundColor: '#fb8c00',
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        Sass
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
);

export default Footer;
