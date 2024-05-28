import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const MainListItems = () => {
    const username = useSelector(
        (state: RootState) => state.auth.user.username,
    );

    return (
        <>
            {username.startsWith('admin') && (
                <>
                    <Accordion disableGutters square>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListSubheader component="div">Apple</ListSubheader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/apple-dashboard"
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Доходы и расходы" />
                            </ListItemButton>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/apple-balance-sheet"
                            >
                                <ListItemIcon>
                                    <TableRowsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Сводная таблица" />
                            </ListItemButton>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/apple-cashflow"
                            >
                                <ListItemIcon>
                                    <TrendingUpOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Финансовый поток" />
                            </ListItemButton>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                    <Accordion disableGutters square>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListSubheader component="div">
                                Alibaba
                            </ListSubheader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/alibaba-dashboard"
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Доходы и расходы" />
                            </ListItemButton>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/alibaba-balance-sheet"
                            >
                                <ListItemIcon>
                                    <TableRowsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Сводная таблица" />
                            </ListItemButton>
                            <ListItemButton
                                LinkComponent={Link}
                                to="/alibaba-cashflow"
                            >
                                <ListItemIcon>
                                    <TrendingUpOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Финансовый поток" />
                            </ListItemButton>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />
                </>
            )}

            {username.endsWith('@apple.com') && (
                <>
                    <ListItemButton LinkComponent={Link} to="/apple-dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Доходы и расходы" />
                    </ListItemButton>
                    <ListItemButton
                        LinkComponent={Link}
                        to="/apple-balance-sheet"
                    >
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
                </>
            )}

            {username.endsWith('@alibaba.com') && (
                <>
                    <ListItemButton
                        LinkComponent={Link}
                        to="/alibaba-dashboard"
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Доходы и расходы" />
                    </ListItemButton>
                    <ListItemButton
                        LinkComponent={Link}
                        to="/alibaba-balance-sheet"
                    >
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
                </>
            )}
        </>
    );
};
