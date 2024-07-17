import { Avatar, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { ReactComponent as Sigile2 } from '../../../svg/Component 50.svg'
import { ReactComponent as Sigile1 } from '../../../svg/Component 49.svg'

import { primaryBlue } from '../../../Static/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfileDataAction } from '../../../actions/userAction'
import Loader from '../../../components/Spinner'
import { account_premium } from '../../../constants'
import { DateCalendar, DayCalendarSkeleton } from '@mui/x-date-pickers'
import DateCalendarServerRequest from './Date'

const UserProfile = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserProfileDataAction())    
    },[])

    const {data,loading,error} = useSelector(state => state.getUserProfileDataReducer)

    const customStyles = {
        path: {
          stroke: primaryBlue, 
          strokeWidth: 4, 
        },
      };
      const [progress,setProgress] = useState(0)
      const [name,setName] = useState("")

      useEffect(()=>{
        if(data?.data?.templates.length>0)
        {
            setProgress(data?.data?.templates[0].progress)
            setName(data?.data?.templates[0].template.name)
        }
      },[data])

      if(loading)
      {
        return (
            <Container style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Loader/>
            </Container>    
        )
      }
  return (
    <Row style={{marginTop:'2rem'}}>

    <Col lg={3} >
      <Paper sx={{padding:'1rem',height:'45rem',marginLeft:'1rem'}} elevation={3}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'baseline'}}> 
           <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <Avatar sx={{width:50,height:50}} variant="rounded" />
            <div style={{marginLeft:'1rem'}}>
              <h4 style={{opacity:0.9}}>FrodoTheButcher</h4>
              <Typography sx={{fontSize:17}}>Rank <strong style={{opacity:0.8}}>{data?.data?.rank}</strong></Typography>
            </div>
           </div>
            <Button variant='contained'><strong>Edit Profile</strong></Button>
        </div>
        <Divider sx={{ borderBottomWidth: 3,marginTop:'1rem',marginBottom:'1rem' }}/>
        <div >
          <Row>
            <Typography sx={{fontWeight:'400',fontSize:25,opacity:0.9}}>User stats</Typography>
          </Row>
           <Row>
           <Typography sx={{fontWeight:'400',fontSize:20,opacity:0.99}}>Algorithms: <strong style={{opacity:0.8}}>{data?.data?.algos}</strong></Typography>
           </Row>
           <Row>
           <Typography sx={{fontWeight:'400',fontSize:20,opacity:0.99}}>Quizez: <strong style={{opacity:0.8}}>{data?.data?.quizez}</strong></Typography>
           </Row>
           <Row>
           <Typography sx={{fontWeight:'400',fontSize:20,opacity:0.99}}>Videos: <strong style={{opacity:0.8}}>{data?.data?.videos}</strong></Typography>
           </Row>
        </div>
        <Divider sx={{ borderBottomWidth: 3,marginTop:'1rem',marginBottom:'1rem' }}/>
        <Row>
            <Typography sx={{fontWeight:'400',fontSize:25,opacity:0.9}}><span >Exercises solved</span></Typography>
        </Row>
        {data?.data?.languages_solved.map(e=>
        <Row>
        <Typography sx={{fontWeight:'300',fontSize:20,opacity:0.99,borderRadius:'10px'}}><span style={{background:'#f0f0f0',borderRadius:'30px',padding:'4px',paddingRight:'13px',paddingLeft:'13px'}}>{e.language}</span><strong style={{opacity:0.8}}>{e.solved} Solved</strong></Typography>
       </Row>
        )}
      </Paper>
    </Col>
     <Col>
        <Row style={{marginTop:'1rem'}}>
        <Col style={{height:'20rem'}} lg={4}>
      <Paper sx={{padding:'1rem',height:'100%'}} elevation={3}>
      <Row>
        <Typography sx={{fontWeight:'500'}}>Roadmap Progress</Typography>
      </Row>
      <Row  style={{height:'80%',alignItems:'center',justifyContent:'space-around'}}>
            <Col lg={4}>
                <div style={{ width: 140, height: 140}}>
                <CircularProgressbarWithChildren styles={customStyles}  value={progress}>
                <strong style={{fontSize:'1.5rem'}}>{progress}%</strong>
            </CircularProgressbarWithChildren>   
            <FormControl sx={{width:'10rem',marginTop:'0.5em'}} >
                    <InputLabel  id="demo-simple-select-label" shrink={false}>
                    <Button>{name}</Button>
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={e=>{setProgress(e.target.value.progress);setName(e.target.value.name)}}
                    >
                    {data?.data?.templates?.map(e=>
                        <MenuItem value={{"progress":e.progress,"name":e?.template?.name}}>{e?.template.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>      
                </div>
                </Col>
                <Col>
                <div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                <Typography>Easy</Typography>
                <Typography>{data?.data?.algos_solved_difficulty?.easy}</Typography>
                </div>
                <ProgressBar striped now={100} style={{height:'1.5rem'}} label='easy' variant='info'   />
                </div>
                <div style={{marginTop:'0.5rem',marginBottom:'0.5rem'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                <Typography>Moderate</Typography>
                <Typography>{data?.data?.algos_solved_difficulty?.medium}</Typography>
                </div>
                <ProgressBar style={{height:'1.5rem',borderRadius:'50px'}} striped now={100} label='medium'  variant='success'  />
                </div>
                <div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                <Typography>Hard</Typography>
                <Typography>{data?.data?.algos_solved_difficulty?.hard}</Typography>
                </div>
                <ProgressBar striped now={100} style={{height:'1.5rem'}} label='hard' variant='danger'  />
                </div>
                </Col>
            </Row>
            </Paper>
            </Col>
            <Col style={{height:'20rem'}} lg={4}>
            <Paper sx={{padding:'1rem',textAlign:'center',height:'100%'}} elevation={3}>
            <Typography sx={{fontWeight:'500'}}>Your account type:</Typography>
                <h1 style={{color:"#F4CF98"}}>{data?.data?.account_type}</h1>
                {
                    data?.data?.account_type === account_premium ?
                    <Sigile2 style={{width:'10rem',height:'10rem'}}/>
                    :
                    <Sigile1 style={{width:'10rem',height:'10rem'}}/>
                }
            </Paper> 
            </Col>
            <Row style={{marginTop:'1em'}}>
                <Col lg={8} style={{height:'22rem'}}>
                <Paper elevation={3} sx={{width:'100%',height:'100%',padding:'1rem'}}>
                        <Typography><strong>261</strong> Submissions in the last year</Typography>
                        <DateCalendarServerRequest dates={data?.data?.submissions}/>
                </Paper>
                </Col>
            </Row>
        </Row>
     </Col>
    </Row>
  )
}

export default UserProfile
