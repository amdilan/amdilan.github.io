import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/navBar';
import { Container, Box } from '@mui/material';

export default function MainPage() {
    return (
        <Box id='mainApp'>
            <NavBar />
            <Outlet />
        </Box >
    )
};
