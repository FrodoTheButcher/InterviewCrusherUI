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
import { primaryBlue, primaryGray } from '../../../Static/Colors';
import WhiteButton from '../../../components/WhiteButton';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function RightPopUp({type,roadmap,setUserAcceptsToSkipContentData}) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const {roadmapName,roadmapId,chapterId} = useParams()
    const navigate =useNavigate()
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
                <ListGroupItem variant={type === "Video" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content setUserAcceptsToSkipContentData={setUserAcceptsToSkipContentData} isMainCourseContent={type === "Video"} courseContent={roadmap?.chapter?.videos} roadmap={roadmap} type={"Video"} text={"Course Content"} />
                    </div>
                </ListGroupItem>
                <ListGroupItem variant={type === "Quiz" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content setUserAcceptsToSkipContentData={setUserAcceptsToSkipContentData} isMainCourseContent={type === "Quiz"} courseContent={roadmap?.chapter?.quizez} roadmap={roadmap} type={"Quiz"} text={"Quiz Content"} />
                    </div>
                </ListGroupItem>
                <ListGroupItem variant={type === "Algorithm" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Content setUserAcceptsToSkipContentData={setUserAcceptsToSkipContentData} isMainCourseContent={type === "Algorithm"} courseContent={roadmap?.chapter?.algorithms} roadmap={roadmap} type={"Algorithm"} text={"Algo Content"} />
                    </div>
                </ListGroupItem>
                <ListGroupItem style={{bottom:'0',position:'absolute'}} variant={type === "Algorithm" ? 'primary' : ''}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <p style={{color:primaryGray}}>Expand your knowledge with the <span style={{color:primaryBlue}}>Written</span> Course!</p>
                        <WhiteButton extraSmall={true} text={"Start"} onClick={()=>navigate(`/writtenCourse/${roadmapName}/${roadmapId}/${chapterId}/`)} />
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