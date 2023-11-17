import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-eclipse";
import axios from "axios";
import {useParams} from 'react-router-dom'
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
function Interpreter({ setExpand }) {
  const [code, setCode] = useState(false); // State to store the code
  const [submitSampleData, setSubmitSampleData] = useState(true)
  const [selectedLang, setSelectedLang] = useState(null)
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch()
  const handleCodeChange = (newCode) => {
    setCode(newCode); 
  };

  const { contentId, roadmapId, chapterId } = useParams()


  const createNewSubmission = useSelector(state => state.createNewSubmissionReducer)

  const { loading: loadingTestCases,data } = createNewSubmission
  const handleSubmit = async () => {
      const data ={
        "code":btoa(code),
        "language":selectedLang.judge0LanguageId,
        "submitSampleData": submitSampleData,
        "template": roadmapId,
        "chapter":chapterId,
        "algorithm":contentId
      }
      dispatch(createNewSubmissionAction(data))
  }

  useEffect(()=>{
    console.log("data",data)
    if(data=="success")
    {
      setOpen(true)
    }
  },[data])
  return (
    <>
    {data == "success" &&
    <CustomizedSnackbars isOpen={open}  message={"success"}/>
    }
      <Row style={{ width: '100%', height: '10%' }}>
        <Col style={{ paddingTop: '0.5em' }} md={4}>
          <Languages selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
          <small>Paste your code</small>
        </Col>
        <Col style={{ marginLeft: 'auto', paddingTop: '0.5em' }} className='CompilerSvgs' md={6}>
          <Button onClick={()=>setCode("")} variant="none" >
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
        />
        {loadingTestCases ? (
          <>
          </>
        ) : (
          <Row className="justify-content-center">
              <WhiteButton small={true} widthlen={200} marginTop={1} color={primaryBlue} text={submitSampleData ? "Submit Sample Data" : "Submit"} onClick={handleSubmit} />
          </Row>
        )}
      <SubmissionTable setSubmitSampleData={setSubmitSampleData} />
      </Container>
    </>
    
  );
}

export default Interpreter;
