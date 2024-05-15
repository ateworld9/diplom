import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

export const mainListItems = (
    <>
        <ListSubheader component="div">Apple</ListSubheader>
        <ListItemButton LinkComponent={Link} to="/apple-dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Финансовые показатели" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to="/apple-balance-sheet">
            <ListItemIcon>
                <TableRowsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Сводная таблица" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to="/apple-cashflow">
            <ListItemIcon>
                <TrendingUpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Финансовый поток" />
        </ListItemButton>
        <Divider />
        <ListSubheader component="div">Alibaba</ListSubheader>
        <ListItemButton LinkComponent={Link} to="/alibaba-dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Финансовые показатели" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to="/alibaba-balance-sheet">
            <ListItemIcon>
                <TableRowsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Сводная таблица" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to="/alibaba-cashflow">
            <ListItemIcon>
                <TrendingUpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Финансовый поток" />
        </ListItemButton>
        <Divider />
    </>
);
