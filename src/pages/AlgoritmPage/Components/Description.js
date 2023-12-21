import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Example from './Example'
import './Description.css'
import {ReactComponent as Like} from '../../../svg/Like.svg'
import { ReactComponent as Dislike } from '../../../svg/Dislike.svg'
import { Link, useParams } from 'react-router-dom'
import { primaryBlue } from '../../../Static/Colors'
import { HARD } from '../../../Constants/DifficultyConstants'
import Difficulty from '../../../components/Difficulty'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Spinner'
import { userDislikeAction, userLikeAction } from '../../../actions/userAction'
import CustomizedSnackbars from '../../../components/CustomizedSnackbars'
const Description = ({currentAlgo}) => {

  
    const [sectionActive,setSectionActive]=useState(1)
    const [like,setLike]=useState(false)
    const [dislike, setDislike] = useState(false)
    const dispatch = useDispatch()
    const {type} = useParams()
    const [numberLikes,setNumberOfLikes]=useState(currentAlgo?.likes ? currentAlgo.likes : 0)
    const [numberDislikes,setNumberOfDislikes]=useState(currentAlgo?.dislikes ? currentAlgo.dislikes : 0)

    const [buttonClicked,setButtonClicked]=useState(0)

    useEffect(()=>{
        setNumberOfLikes(currentAlgo?.likes)
      },[currentAlgo])
    
    const handleDislike = ()=>{
        setLike(false)
        setDislike(true)
        dispatch(userDislikeAction({id:currentAlgo.id}))
        setNumberOfDislikes(prev=>prev+1);
    }

    const [snackbar,setSnackbar]=useState(false)
    const [snackbarMessage,setSnackbarMessage]=useState("")
    const handleLike = ()=>{
        if(like == true)
        {
            setSnackbar(true)
            setSnackbarMessage("You already liked this algorithm")
            return;
        }
        setLike(true)
        setDislike(false)
        setNumberOfLikes(prev=>prev+1)
        dispatch(userLikeAction({ id: currentAlgo.id, type: type }))
    }
    if (currentAlgo === null || currentAlgo === undefined)
    {
        return (<Loader/>)
    }
  return (
    <>
            <CustomizedSnackbars message={snackbarMessage} severity={"warning"}  resetData={setSnackbar} isOpen={snackbar}  />
      <Container style={{overflow:'scroll',height:'100%'}}>
          <Row style={{ borderBottom: '2px solid #000a200d' }}>
              <Container style={{  padding:'1.5rem', borderTop: '2px solid #000a200d' }} fluid>
                  <Row style={{  color: ' rgb(38 ,38 ,38,1)' }}> <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: 'rgb(38, 38, 38,1)', fontSize: '1.5rem'}}>{currentAlgo?.id } {currentAlgo?.name}</Link></Row>
                  <Row style={{  }}>
                      <Col >
                          <Difficulty Fontsize={'1.5em'} Difficulty={currentAlgo?.difficulty} />
                      </Col>
                      <Col>
                      <div style={{display:'flex'}}>
                              <h4 style={{ color: 'rgb(140, 140 ,140,1)' }}>{numberLikes}</h4>
                              <div onClick={() => handleLike()} style={{ cursor: 'pointer', left: '0.2rem', position: 'relative', color: `${!like ? 'rgb(140, 140 ,140,1)' : 'black'}` }}>
                                  <Like />    
                              </div>
                      </div>
                                                
                      </Col>
                      <Col>
                          <div style={{ display: 'flex' }}>
                              <h4 style={{ cursor: 'pointer', color: 'rgb(140, 140 ,140,1)' }}>{numberDislikes}</h4>
                              <div onClick={()=>handleDislike()} style={{ cursor: 'pointer', left: '0.2rem', position: 'relative', color: `${!dislike ? 'rgb(140, 140 ,140,1)' : 'black'}` }}>
                                  <Dislike />
                              </div>
                          </div>                     
                       </Col>
                  </Row>
                  <Row>
                      <Container className='Description'>
                          {currentAlgo?.description}
                      </Container>
                  </Row>
              </Container>
          </Row>
        
         <Container>
            {currentAlgo.examples.map((e,index)=>
                    <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example example={e} number={index} /></Row>
                )}
         </Container>
        

     
            
          <Container >
              <h5 style={{fontWeight:'bolder'}} >Constraints:</h5 >
              <ul>
                  <li style={{ color: '#262626bf' }}>1 {"<"}= nums.length {"<"}= 10^5</li>
                  <li style={{ color: '#262626bf' }}>-10 {"<"}= nums[i] {"<"}= 10^9</li>
              </ul>
              <Row>
                  <Col md={3} style={{ color: '#262626bf' }}>
                      Success Rate  <span style={{ color: primaryBlue }}>4.9M</span> 
                  </Col>
                  <Col style={{ color: '#262626bf' }}>
                      Decline Rate <span style={{color:primaryBlue}}>4.9M</span> 
                  </Col>
                  <Row style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <Row>
                            <p>Too easy?</p>
                         </Row>   
                         <Row>
                              <Button onClick={()=>setButtonClicked(1)}  style={{ border:'none',background:`${buttonClicked==1 ? "blue" : "transparent"}`,color:`${buttonClicked==1 ? 'white' : 'black'}`,width: '3rem',position:'relative',right:'0.2rem' }}>Yes</Button>
                          <Button onClick={() => setButtonClicked(-1)} style={{ border: 'none', background: `${buttonClicked == -1 ? "blue" : "transparent"}`, color: `${buttonClicked == -1 ? 'white' : 'black'}`, width: '3rem' ,position:'relative',left:'0.2rem'}}>No</Button>
                        </Row>                       
                  </Row>
              </Row>
          </Container> 
      </Container>
      
    </>
  )
}

export default Description
