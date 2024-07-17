import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Container, Row } from 'react-bootstrap';
import FolderList from "./List"
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileRoadmapChaptersDataAction } from '../../../actions/userAction';
import Loader from '../../../components/Spinner';
import { useEffect } from 'react';
import "./index.css"
import { primaryBlue, secondaryGray } from '../../../Static/Colors';
const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
 
  const {data,loading,error} = useSelector(state=>state.getUserProfileRoadmapChaptersDataReducer)
  const { window } = props;
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    if(newOpen==true)
    {
      dispatch(getUserProfileRoadmapChaptersDataAction(props.id))
    }
    setOpen(newOpen);
  };


  useEffect(()=>{
    console.log("data",data)
  },[data])
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>{props.name}</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {
          loading ?<Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}> <Loader/></Container>
          : data && 
          <>
           <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{ open ? data?.data?.template_data?.length : props.count} results</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >  
        <Row >
        <Typography sx={{color:secondaryGray}}> You are the number <strong style={{color:primaryBlue}}>{data?.data?.ranking?.user_rank}</strong> out of <strong style={{color:primaryBlue}}>{data?.data?.ranking?.out_of}</strong> users at <strong style={{color:primaryBlue,textDecoration:'underline',cursor:'pointer'}}> {props.name}</strong></Typography>
      </Row>
          
          {data?.data?.template_data?.map (e=>
                    <FolderList template_name={props.name} progress={props.progress} data={e}/>
          )}
        </StyledBox>
          </>
        }
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
