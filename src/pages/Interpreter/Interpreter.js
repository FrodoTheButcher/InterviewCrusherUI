import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-eclipse";
import axios from "axios";
import {useParams} from 'react-router-dom'
function Interpreter() {
  const apiKey = "0b06570eb3msh45a1cc27f932daep1873a1jsn772d9f62a13a";
  const [code, setCode] = useState(""); // State to store the code
  const [submissionResult, setSubmissionResult] = useState(null); // State to store the submission result
  const [compileError, setCompileError] = useState(""); // State to store compilation error
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const [programOutput,setProgramOutput] = useState("")
  const [language,setLanguage] = useState(76)
  const handleCodeChange = (newCode) => {
    setCode(newCode); // Update the code state when the user enters code
  };


  const {contentId} = useParams()
  const getResult = async (submissionToken) => {
    setIsLoading(true);
  
    // Delay for 15 seconds (15000 milliseconds)
    setTimeout(async () => {
      const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${submissionToken}`,
        params: {
          base64_encoded: 'true',
          fields: '*'
        },
        headers: {
          'X-RapidAPI-Key': '95803f70a3mshfeee61cf8b53fe0p185f63jsn51a8dda17fe8',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data);
        // Check the status of the submission and update state accordingly
        if (response.status===200) {
          //if(response.data.stdout === response.data.expected_output)
          //alert("success")
        //else
        //alert("nas")
          setSubmissionResult(response.data);
          setCompileError(""); // Clear any previous compilation errors
          // Decode and set the program output
          const decodedOutput = atob(response.data.stdout);
          setProgramOutput(decodedOutput);
        } else if (response.data.status.id === 6) {
          setCompileError(response.data.compile_output);
          setSubmissionResult(null); // Clear any previous submission result
        } else {
          // Handle other statuses if needed
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }, 15000); // 15 seconds delay
  };

  const handleSubmit = async () => {
    try{
      const data ={
        "code":btoa(code),
        "language":language
      }
      const access = localStorage.getItem('access')
      const config = {
          headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${access}`
          }
      }
      const response = await axios.post(`http://localhost:8000/api/submission/${contentId}/`,data,config)
      console.log(response);
    }
    catch(e)
    {
      console.log("error",e)
    }
    
  }
  

  /*const handleSubmit = async () => {
    // Encode the source_code as Base64
    console.log(code)
    const base64EncodedSourceCode = btoa(code);
    console.log(base64EncodedSourceCode)

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "95803f70a3mshfeee61cf8b53fe0p185f63jsn51a8dda17fe8",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: 76,
        source_code: base64EncodedSourceCode, // Use the Base64-encoded source code
        stdin: btoa("5\n7"), // Encode "5\n7" as a Base64 string and provide it as input
        expected_output: btoa("12"), // Encode the expected output as a Base64 string
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.request(options);
      console.log(response.data);
      getResult(response.data.token);
     
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };*/

  useEffect(() => {
    setIsLoading(false); // Reset loading state when code changes
  }, [code]);

  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="eclipse"
        editorProps={{ $blockScrolling: true }}
        onChange={handleCodeChange}
        value={code}
      />
      <button onClick={handleSubmit}>Submit Code</button>
      {isLoading && <p>Loading...</p>}
      {compileError && (
        <div>
          <h2>Compilation Error</h2>
          <pre>{compileError}</pre>
        </div>
      )}
    {programOutput && (
        <div>
          <h2>Program Output</h2>
          <pre>{programOutput}</pre>
        </div>
      )}
    </div>
  );
}

export default Interpreter;
