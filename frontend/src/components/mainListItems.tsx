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

export const mainListItems = (
    <>
        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Alibaba</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Alphabet</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Amazon</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />
        
        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Apple</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Home Depot</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
                <ListItemButton LinkComponent={Link} to="/alibaba-dashboard">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Финансовые показатели" />
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Merck</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Meta</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Microsoft</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Nestle</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">NVIDIA</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Oracle</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Samsung</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Tesla</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Toyota</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Visa</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />

        <Accordion disableGutters square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListSubheader component="div">Walmart</ListSubheader>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        <Divider />
    </>
);
