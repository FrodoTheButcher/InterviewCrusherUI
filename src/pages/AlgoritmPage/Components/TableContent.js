import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Description from './Description';
import { HARD } from '../../../Constants/DifficultyConstants';
import Overview from './Overview';
import Solutions from './Solutions';
import Question from './Question';
import Submissions from './Submissions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarsIcon from '@mui/icons-material/Stars';
import { primaryBlue } from '../../../Static/Colors';
import { Tooltip } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSubmissionsAction } from '../../../actions/algorithmAction';
import { useDispatch, useSelector } from 'react-redux';
import AlgoritmPage from '../AlgoritmPage';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
        bgcolor: green[600],
    },
};


const fabBlueStyle = {
    color: 'common.white',
    bgcolor: primaryBlue,
    '&:hover': {
        bgcolor: green[600],
    },
};

const fabGoldStyle = {
    color: 'common.white',
    bgcolor: "gold",
    '&:hover': {
        bgcolor: green[600],
    },
};


export default function FloatingActionButtonZoom({ currentAlgo}) {
   
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            sx: fabStyle,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            sx: fabStyle,
            icon: <TipsAndUpdatesIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <UpIcon />,
            icon: <MailOutlineIcon />,
            label: 'Expand',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabBlueStyle },
            icon: <AddIcon />,
            label: 'Expand',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGoldStyle },
            icon: 
            <SearchIcon />
            ,

            label: 'Expand',
        },
    ];

    useEffect(()=>{
    }, [currentAlgo])

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                width: "100%",
                position: 'relative',
                height:'100%'
            }}
        >
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                    
                >
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Tips" {...a11yProps(1)} />
                    <Tab label="Feedback" {...a11yProps(2)} />
                    <Tab label="Questions" {...a11yProps(3)} />
                    <Tab label="Submissions" {...a11yProps(4)} />

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{height:'100%'}}
            >
                <TabPanel style={{height:'100%'}} value={value} index={0} dir={theme.direction}>
                    <Description label="Item One" {...a11yProps(0)} currentAlgo={currentAlgo} difficulty={HARD} />
                </TabPanel>
                <TabPanel style={{ height: '100%' }} value={value} index={1} dir={theme.direction}>
                    <Overview  />
                </TabPanel>
                <TabPanel style={{ height: '100%' }} value={value} index={2} dir={theme.direction}>
                    <Solutions />
                </TabPanel>
                <TabPanel style={{ height: '100%' }} value={value} index={3} dir={theme.direction}>
                    <Question />
                </TabPanel>
                <TabPanel style={{ height: '100%' }} value={value} index={4} dir={theme.direction}>
                    <Submissions   />
                </TabPanel>
            </SwipeableViews>
            {fabs.map((fab, index) => (
                <Zoom
                    key={fab.color}
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}
        </Box>
    );
}
