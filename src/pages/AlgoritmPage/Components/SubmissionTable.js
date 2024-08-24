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
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBasicTestCaseAction, getTestCaseAction } from '../../../actions/algorithmAction';
import { ErrorPrinter } from '../../../actions/errorPrinter';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { ROADMAP_RESET } from '../../../Constants/roadmap';
import { SUBMISSIONS } from '../../../Constants/AlgoritmPage';
import { CREATE_NEW_SUBMISSION_RESET } from '../../../Constants/algoConstants';

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

export default function SubmissionTable({ setSubmitSampleData,submitSampleData }) {

    const {contentId} = useParams()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()

    const getTestCases = useSelector(state => state.getBasicTestCasesReducer)
    const {loading,error,testcases} = getTestCases
    const createNewSubmission = useSelector(state => state.createNewSubmissionReducer)
    const [open,setOpen]=useState(false)
    const { loading: loadingTestCases, error: errorTestCases, data: submissionResult } = createNewSubmission
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
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <UpIcon />,
            label: 'Expand',
        },
    ];

  
    function formatTextWithLineBreaks(text) {

        const lines = text?.split('\\n');
        return lines?.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
            </React.Fragment>
        ));
    }
    function base64ToString(base64) {
        try {
            // Use the atob function to decode the Base64 string
            const decodedString = atob(base64);
            console.log(decodedString)
            return decodedString;
        } catch (error) {
            console.error("Invalid Base64 string:", error);
            return null;
        }
    }

   
    useEffect(()=>{
        dispatch(getBasicTestCaseAction(contentId))
     
    },contentId)

    useEffect(()=>{
        if (submissionResult !== undefined)
        {
            setOpen(true)
            if (submissionResult ==="Create Success")  
            {
                setSubmitSampleData(false)
            }
        } 
    },[submissionResult])

    useEffect(()=>{
        if(!submitSampleData && submissionResult ==="Success")
        {
            dispatch({type:ROADMAP_RESET})
            dispatch({type:CREATE_NEW_SUBMISSION_RESET})
        }
        else
        {
            console.log("nema",submitSampleData,submissionResult)
        }
    },[submitSampleData,submissionResult])

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                width: "100%",
                position: 'relative',
                height:"100%",
                margin:'0',
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
                    <Tab  label={submissionResult !== "success" && submissionResult !== undefined ? "Wrong answer" : "Basic TestCases" } {...a11yProps(0)} />
                    <Tab  label={submissionResult !== "success" && submissionResult !== undefined ? "TestCases Tips" : "TestCase Tip"} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    submissionResult=="Success" ? <>congratulations</>:
                    loading || loadingTestCases ? <Spinner/> : error ? <ErrorPrinter error={error}/> :
                    errorTestCases ? <ErrorPrinter error={errorTestCases}/>
                    :
                            submissionResult !== "Create Success" && submissionResult !== undefined ?
                    <>
                            <TabPanel value={0} index={0} dir={theme.direction}>
                                <Row>
                                    <Col>
                                          <strong>input:</strong>
                                          <Row>
                                              <p style={{ whiteSpace: 'pre-line' }} >{formatTextWithLineBreaks(submissionResult.input_data)}</p>
                                          </Row>

                                          <strong>expected output:</strong>
                                          <Row>
                                              <p style={{ whiteSpace: 'pre-line' }}>{formatTextWithLineBreaks(submissionResult.expected_output)}</p>
                                          </Row>
                                    </Col>
                                    <Col>
                                          <strong>Your output:</strong>
                                                <Row><p style={{ whiteSpace: 'pre-line' }}>{submissionResult?.reasonForFail === "Compilation Error" ? "Compilation Error" : submissionResult?.reasonForFail === "Runtime Error (NZEC)" ? "RunTime Error" : formatTextWithLineBreaks(base64ToString(submissionResult?.reasonForFail))}</p></Row>
                                    </Col>
                                    
                                </Row>
                            </TabPanel>
                            <TabPanel value={1} index={1} dir={theme.direction}>
                                Sample input tip:
                            </TabPanel>
                    </>
                    : submissionResult === undefined 
                    ?
                    <>
                            <TabPanel  value={0} index={0} dir={theme.direction}>
                            <Row style={{overflowY:'scroll',height:'10em'}} > 
                               {testcases?.testcases?.map ((test,index)=>
                               <Container fluid key={test?.id}>
                               
                                <strong>input Nr.{index}</strong>
                                       <Row>
                                           <p style={{ whiteSpace: 'pre-line' }} >{formatTextWithLineBreaks(test?.input_data)}</p>
                                       </Row>

                                       <strong>expected output:</strong>
                                       <Row>
                                           <p style={{ whiteSpace: 'pre-line' }}> { formatTextWithLineBreaks(test?.expected_output)}</p>
                                       </Row>
                               </Container>
                                )}
                             </Row>                            
                            </TabPanel>
                          
                    </>
                    
                    :
                    <p>Now you can run the other testcases</p>
                }
                  <TabPanel value={1} index={1} dir={theme.direction}>
                            <Row style={{overflowY:'scroll',height:'10em'}} > 
                            {submissionResult && submissionResult?.tip ?
                            <Row>
                                <p style={{ whiteSpace: 'pre-line' }} >{submissionResult?.tip}</p>
                            </Row>
                            :
                        
                               testcases?.tips?.map ((tip,index)=>
                               <Container fluid key={index}>
                                <strong>tip Nr.{index}</strong>
                                       <Row>
                                           <p style={{ whiteSpace: 'pre-line' }} >{tip}</p>
                                       </Row>
                               </Container>
                                )
                            }
                             </Row>                  
                    </TabPanel>
               

            </SwipeableViews>
        </Box>
    );
}