import React, { useState } from 'react'
import AceEditor from "react-ace";
import WhiteButton from '../../../components/WhiteButton';

const Editor = ({code,setCodeWritten,setTextEdited,codeWritten}) => {

    const [expand,setExpand]=useState(false)

    React.useEffect(() => {
      if(code)
      {
        setCodeWritten(code)
      }
    }, [code])
  return (
    <>
     <AceEditor
          mode="c_cpp"
          theme="eclipse"
          editorProps={{ $blockScrolling: true }}
          value={codeWritten}
          highlightActiveLine={true}
          width="100%"
          placeholder={codeWritten}
          enableBasicAutocompletion={true}
          focus={true}
          fontSize={"1rem"}
          height={expand ? "40em" : "10em"}
          onChange={(e)=>{setCodeWritten(e);setTextEdited(true)}}
        />
        <WhiteButton small={true} text={expand ? "un-expand" : "expand"} onClick={()=>setExpand(prev=>!prev)} />
    </>
   
  )
}

export default Editor
