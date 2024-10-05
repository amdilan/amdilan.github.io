import { Box, Container, Typography } from '@mui/material';

export default function Page404() {
    return (
        <Container spacing={2} sx={{ width: '100%', flexGrow: 1 }}>
            <Box
                sx={{
                    marginTop: '8',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Typography variant='h1' sx={{ flexGrow: 1 }} >404</Typography>
                <Typography variant='h4' sx={{ flexGrow: 1 }} >Page Not Found</Typography>
            </Box>
        </Container>
    )
};