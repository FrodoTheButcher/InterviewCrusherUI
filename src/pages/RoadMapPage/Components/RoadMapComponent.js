import React, { useEffect, useState } from 'react'
import { Row,Col ,Button, Container, FormGroup, ListGroupItem} from 'react-bootstrap'
import './RoadMapComponent.css'
import django from '../images/djangoimg.png'
import Cs from '../images/CSHARP.png'
import ml from '../images/machinelearning.png'
import react from '../images/react.png'
import reactcs from '../images/reactcs.png'
import reactdj from '../images/reactdjango.png'
import { CS, DJANGO, MACHINELEARNING, REACT, REACTCS, REACTDJANGO, UNFOCUSED } from '../constants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ReusableVideoComp from '../../../components/ReusableVideoComponent'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { roadmapGetCurrentChapter } from '../../../actions/roadmapGetAllAction'
const RoadMapComponent = ({ roadmap,mainPageContainerProvenience, setMainPageContainerProvenience,setIsFocused,img, MainParagraph, SecondParagraph, ButtonText, SmallText, span }) => {
  const [path,setPath]=useState(`${roadmap?.image}`)
  const [containerProvenience,setContainerProvenience]=useState("")
  const navigate = useNavigate();
 
  const dispatch = useDispatch()
  const handleRoadmapLoading = async ()=>{
    dispatch(roadmapGetCurrentChapter(roadmap.id))
  }
  const roadmapItem = useSelector(state=>state.roadmapItem)
  const {loading,error,roadmap : currentChapter}=roadmapItem

  useEffect(()=>{
 
    if(currentChapter?.id==roadmap?.id  && currentChapter)
    {
      setIsFocused(UNFOCUSED)
      setMainPageContainerProvenience(UNFOCUSED)
      navigate(`/${roadmap.title}/${roadmap.id}/${currentChapter?.chapter?.chapterId}/${currentChapter?.chapter?.contentType}/${currentChapter?.chapter?.currentId}`)
    }
  },[loading,error,currentChapter])
  return (
    <div className='RoadMapComponent' style={{ backgroundImage: `url(${path})` }}>
          <div style={{marginLeft:'1em'}}>
        <h3 style={{ color: 'white' }}>{MainParagraph}</h3>
            <h4 style={{color:'white',opacity:'0.9'}}>{SecondParagraph} {span}</h4>
          {mainPageContainerProvenience ===UNFOCUSED ?
          <Link onClick={() => { setIsFocused(roadmap.id); setMainPageContainerProvenience(containerProvenience) }} className='Btn-Hover' >{ButtonText}</Link>
          :
          <Link onClick={() => { setIsFocused(UNFOCUSED); setMainPageContainerProvenience(UNFOCUSED) }} className='Btn-Hover' >Cancel</Link>
        }
            <small style={{opacity:'0.9',color:'white'}}>{SmallText}</small>
          </div>
        {
        mainPageContainerProvenience === containerProvenience ?
       
        <ListGroupItem  style={{width:'60%'}}>
         
            <video controls width="100%" >
                <source src={roadmap.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <Button onClick={() => handleRoadmapLoading()} className='ButtonHover' style={{ marginTop:'1em',background: 'white', width: '10rem', fontWeight: 'bold', borderColor: '#B2C0CF', color: 'black' }}>Continue</Button>
             
        </ListGroupItem>
        :
        ""
        }
          
        
      </div>
  )
}

export default RoadMapComponent
