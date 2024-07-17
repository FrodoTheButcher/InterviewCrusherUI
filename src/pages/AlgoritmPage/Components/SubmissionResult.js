import React from 'react'
import { Container } from 'react-bootstrap'
import AceEditor from "react-ace";
import { useSelector } from 'react-redux';
import Loader from '../../../components/Spinner';
import ErrorPrinter from '../../../actions/errorPrinter';
const SubmissionResult = () => {
  function base64Decode(encodedString) {
    try {
        const decodedString = atob(encodedString);

        return decodedString;
    } catch (error) {
        console.error('Error decoding Base64:', error.message);
        return null;
    }
}

  const {loading,data,error}=useSelector(state=>state.getUserAlgorithmSubmissionResultById)
  
  return (
    <Container fluid style={{ width: '100%', height: '90%'}}>
      {
        loading ? <Loader/> : error ? <ErrorPrinter>{error}</ErrorPrinter>
        :

      
    <AceEditor
      mode="c_cpp"
      theme="eclipse"
      editorProps={{ $blockScrolling: true }}
      highlightActiveLine={true}
      width="100%"
      value={base64Decode(data.solutionB64)}
      enableBasicAutocompletion={true}
      focus={true}
      fontSize={"1rem"}
      height="100%"
    />
      }
  </Container>
  )
}

export default SubmissionResult
