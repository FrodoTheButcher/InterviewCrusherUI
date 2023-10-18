import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
 import Content from './Content';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function RightPopUp({type,roadmap}) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [hide,setHide] = useState(false)
    const hiddenStyle ={
        position:"fixed",
        opacity:'0.6',
        right:"0",
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ListGroup style={{ width: '100%' }}>
                <ListGroupItem variant={type === "course" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content courseContent={roadmap?.videoArrayData} roadmap={roadmap} type={"course"} text={"Course Content"} />
                    </div>
                </ListGroupItem>
                <ListGroupItem variant={type === "quiz" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content courseContent={roadmap?.quizArrayData} roadmap={roadmap} type={"quiz"} text={"Quiz Content"} />
                    </div>
                </ListGroupItem>
                <ListGroupItem variant={type === "algo" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content courseContent={roadmap?.algoArrayData} roadmap={roadmap} type={"algo"} text={"Algo Content"} />
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Box>
    );

    
    
    return (
        <div style={hide ? hiddenStyle : null}>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton sx={{flexDirection:'column'}}>   
                        {
                            !hide ?
                            <Button onClick={() => setHide(true)}>
                                <small>hide</small>
                            </Button>
                                :
                            <Button onClick={()=>setHide(false)}>
                                    <VisibilityIcon/>
                            </Button>
                        }
                        {!hide &&
                            <Button onClick={toggleDrawer(anchor, true)} sx={{ flexDirection: 'column' }}>
                                <small>Expand course</small>
                                <ExpandCircleDownIcon />
                            </Button>
                        }
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}