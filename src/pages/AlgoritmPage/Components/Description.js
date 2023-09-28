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
import { useSelector } from 'react-redux'
import Loader from '../../../components/Spinner'
const Description = ({currentAlgo}) => {

    const [sectionActive,setSectionActive]=useState(1)
    const [like,setLike]=useState(false)
    const [dislike, setDislike] = useState(false)

  

    //1 yes 0 no 0 default
    const [buttonClicked,setButtonClicked]=useState(0)

    const handleDislike = ()=>{
        setLike(false)
        setDislike(true)
    }
    const handleLike = ()=>{
        setLike(true)
        setDislike(false)
    }
    if (currentAlgo === null || currentAlgo === undefined)
    {
        return (<Loader/>)
    }
  return (
      <Container style={{ borderLeft:'1rem solid rgb(240, 240, 240)',background: 'white',height:'100%',overflowY:'scroll'}}>
          <Row style={{ borderBottom: '2px solid #000a200d' }}>
              <Container style={{ marginTop: '1rem', marginBottom: '1rem', padding:'1.5rem', borderTop: '2px solid #000a200d' }} fluid>
                  <Row style={{ marginTop: '1rem', color: ' rgb(38 ,38 ,38,1)' }}> <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: 'rgb(38, 38, 38,1)', fontSize: '1.5rem'}}>{currentAlgo?.id } {currentAlgo?.name}</Link></Row>
                  <Row style={{ marginTop: '1rem' }}>
                      <Col >
                          <Difficulty Fontsize={'1.5em'} Difficulty={currentAlgo?.difficulty} />
                      </Col>
                      <Col>
                      <div style={{display:'flex'}}>
                              <h4 style={{ color: 'rgb(140, 140 ,140,1)' }}>{currentAlgo?.likes}K</h4>
                              <div onClick={() => handleLike()} style={{ cursor: 'pointer', left: '0.2rem', position: 'relative', color: `${!like ? 'rgb(140, 140 ,140,1)' : 'black'}` }}>
                                  <Like />    
                              </div>
                      </div>
                                                
                      </Col>
                      <Col>
                          <div style={{ display: 'flex' }}>
                              <h4 style={{ cursor: 'pointer', color: 'rgb(140, 140 ,140,1)' }}>{currentAlgo?.dislikes}K</h4>
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
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
              <Row style={{ borderBottom: '1px solid #000a200d', marginTop: '1.5rem' }}><Example /></Row>
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
  )
}

export default Description
