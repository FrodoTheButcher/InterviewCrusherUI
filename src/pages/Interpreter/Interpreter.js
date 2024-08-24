import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-eclipse";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'
import SubmissionTable from "../AlgoritmPage/Components/SubmissionTable";
import { useDispatch, useSelector } from 'react-redux'
import {  createNewSubmissionAction } from "../../actions/algorithmAction";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import OpenInFullIcon from '@mui/icons-material/OpenInFull'; import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Languages from "../AlgoritmPage/Components/Languages";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import WhiteButton from '../../components/WhiteButton'
import { primaryBlue } from "../../Static/Colors";
import CustomizedSnackbars from "../../components/CustomizedSnackbars";
import { ROADMAP_RESET } from "../../Constants/roadmap";
import { Typography } from "@mui/material";
import { EntitiesChoices } from "../../constants";
function Interpreter({ setExpand ,completed_code}) {
  function convertLiteralNewlines(text) {
    return text?.replace(/\\n/g, '\n');
  }
  const [code, setCode] = useState(convertLiteralNewlines(completed_code));
  const [submitSampleData, setSubmitSampleData] = useState(true)
  const [selectedLang, setSelectedLang] = useState(null)
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch()
  const handleCodeChange = (newCode) => {
    setCode(newCode); 
  };

  const { contentId, roadmapId, chapterId } = useParams()


  const createNewSubmission = useSelector(state => state.createNewSubmissionReducer)

  const { loading: loadingTestCases,data , redirect } = createNewSubmission
  const handleSubmit = async () => {
      const data ={
        "code":btoa(code),
        "language_id":selectedLang,
        "submitSampleData": submitSampleData,
        "template_id": roadmapId,
        "chapter_id":chapterId,
        "algorithm_id":contentId
      }
      dispatch(createNewSubmissionAction(data))
  }
  const navigate = useNavigate()

  useEffect(()=>{
    if(redirect)
    {
      navigate(`/redirect/${chapterId}/${roadmapId}/${EntitiesChoices.ALGORITHM}/${contentId}`)
    }
  },[redirect])
  const roadmapItem = useSelector(state=>state.roadmapItem)
  const {roadmap,error,loading}=roadmapItem
  useEffect(()=>{
    setCode(convertLiteralNewlines(completed_code))
  },[completed_code])
  return (
    <>
    {data == "Success" &&
    <CustomizedSnackbars isOpen={open}  message={"success"}/>
    }
      <Row style={{ width: '100%', height: '10%' }}>
        <Col style={{ paddingTop: '0.5em' }} md={4}>
          {
              roadmap?.languages.length !== 0 ?
              <Languages selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
              :
              <Typography style={{background:'white',color:primaryBlue,width:'10em',fontWeight:'bolder',textAlign:'center'}}>Paste your code below</Typography>
          }
        </Col>
        <Col style={{ marginLeft: 'auto', paddingTop: '0.5em' }} className='CompilerSvgs' md={6}>
          <Button onClick={()=>setCode(completed_code)} variant="none" >
            <RestartAltIcon />
          </Button>
          <Button variant="none" >
            <SaveAltIcon />
          </Button>
          <Button onClick={()=>setExpand(prev=>!prev)} variant="none" >
            <OpenInFullIcon />
          </Button>
        </Col>
      </Row>
      <Row>
      </Row>
      <Container fluid style={{ width: '100%', height: '90%'}}>
        <AceEditor
          mode="c_cpp"
          theme="eclipse"
          editorProps={{ $blockScrolling: true }}
          onChange={handleCodeChange}
          value={code}
          highlightActiveLine={true}
          width="100%"
          enableBasicAutocompletion={true}
          focus={true}
          fontSize={"1rem"}
          height="60%"
          defaultValue={completed_code}
        />
        {loadingTestCases ? (
          <>
          </>
        ) : (
          <Row className="justify-content-center">
              <WhiteButton small={true} widthlen={200} marginTop={1} color={primaryBlue} text={submitSampleData ? "Submit Sample Data" : "Submit"} onClick={handleSubmit} />
          </Row>
        )}
      <SubmissionTable submitSampleData={submitSampleData} setSubmitSampleData={setSubmitSampleData} />
      </Container>
    </>
    
  );
}

export default Interpreter;
