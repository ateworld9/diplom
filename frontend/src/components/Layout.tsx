import { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './mainListItems';
import { Button, Paper } from '@mui/material';
import { useAppDispatch } from '../store';
import { fetchLogout } from '../store/auth/authThunks';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export const Layout = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        dispatch(fetchLogout());
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Дашборд
                        </Typography>
                        <IconButton color="inherit">
                            <Button
                                disableRipple
                                variant="text"
                                sx={{
                                    color: 'white',
                                }}
                                onClick={handleLogout}
                            >
                                Выйти
                            </Button>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Box sx={{ display: 'flex' }}>
                        <Paper sx={{ height: '94vh' }}>
                            <List component="nav">{mainListItems}</List>
                        </Paper>
                        <Container
                            maxWidth="lg"
                            sx={{ mt: 4, mb: 4, display: 'flex' }}
                        >
                            {children}
                        </Container>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
