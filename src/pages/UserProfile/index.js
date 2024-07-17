import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfileData } from '../../actions/userAction'
import SimpleGrow from "./components/Showable"
const Index = () => {

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);

    const {loading,data:profileData,error}= useSelector(state => state.getUserProfileReducer)
    const [roadmapNames,setRoadmapNames] = useState([])

    useEffect(()=>{
        dispatch(userGetProfileData())    
    },[])
    useEffect(()=>{
      if(profileData=== undefined || profileData?.data?.roadmaps === undefined)
        return;
        setRoadmapNames(profileData?.data?.roadmaps?.map(e=>{return {"name":e.template.name,"id":e.template.id,"progress":e.progress}}))
    },[profileData])
    useEffect(()=>{
      console.log(roadmapNames)
    },[roadmapNames])
    
   
    
    if(roadmapNames===undefined)
    {
      return (<></>)
    }
  return (
    <div>
      {
      <SimpleGrow checked={checked} setChecked={setChecked} roadmapNames={roadmapNames}/> 
    
      }
    
    </div>
  )
}

export default Index
