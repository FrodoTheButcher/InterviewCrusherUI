import React, { useState } from 'react'
import AceEditor from "react-ace";
import WhiteButton from '../../../components/WhiteButton';

const Editor = ({code}) => {

    const [expand,setExpand]=useState(false)
  return (
    <>
     <AceEditor
          mode="c_cpp"
          theme="eclipse"
          editorProps={{ $blockScrolling: true }}
          value={code}
          highlightActiveLine={true}
          width="100%"
          placeholder={code?.code}
          enableBasicAutocompletion={true}
          focus={true}
          fontSize={"1rem"}
          height={expand ? "40em" : "10em"}
          
        />
        <WhiteButton small={true} text={expand ? "un-expand" : "expand"} onClick={()=>setExpand(prev=>!prev)} />
    </>
   
  )
}

export default Editor
