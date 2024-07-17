import React, { useEffect, useState } from 'react'
import { Container,Row,Col ,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleTimeToLearn } from '../../../actions/roadmapGetAllAction';
import { Snackbar } from '@mui/material';
import CustomizedSnackbars from '../../../components/CustomizedSnackbars';
import { ErrorPrinter } from '../../../actions/errorPrinter';
import Loader from '../../../components/Spinner';

const CourseComponentPopup = ({ setOpenSchedule,openSchedule,schedule,setSchedule }) => {


  const [printError,setPrintError]=useState(false)
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch();
  const scheduleTime = useSelector(state => state.scheduleTimeToLearnReducer)
  const {loading,error,message} = scheduleTime
  const handleSave = () => {
    setOpenSchedule(state => false)
    if(schedule.roadmapId === null || schedule.roadmapId === undefined)
    {
      console.log("wtf")
      setOpen(true)
      setPrintError("Please select a roadmap you own")
    }
    else
    {
      dispatch(scheduleTimeToLearn(schedule))
      setSchedule(null)
      setOpen(false)
    }
  }
  useEffect(()=>{ 
    if(error || message)
    {
      setOpen(true)
    }
  },[error,message])
 
 
  return (
    <Row style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',background: 'white', borderRadius: '20px', width: '30rem', border: '1px solid #B2C0CF', height: '13rem', padding:'1rem',position: 'relative', left: '' }} className='CourseComponentContainer d-flex align-items-center justify-content-center'>
        
        {loading ? <Loader /> : error ? 
        <>
              <CustomizedSnackbars resetData={setOpen} severity={"error"} isOpen={open} message={error} />
        </>
      : message ?
      <CustomizedSnackbars resetData={setOpen}  severity={"success"} isOpen={open} message={message} />  
      : printError &&
      <CustomizedSnackbars resetData={setOpen}  severity={"error"}  isOpen={open} message={printError} />
      }
        <Col style={{ position: 'relative' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" /><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></rect></svg>        </Col>
        <Col>
          <Row><h4>Schedule time to learn</h4></Row>
          <p style={{ color: '', fontWeight: '', lineHeight: '' }}>Aim everyday to get better <br /> and never give up!</p>

        <Row>
          
          {
            !openSchedule  ? 
            <Button onClick={() => setOpenSchedule(true)} className='ButtonHover' style={{ background: 'none', width: '10rem', fontWeight: 'bold', borderColor: '#B2C0CF', color: '#1CABFC' }}>{'Start now!'}</Button>
            :
            <Button onClick={handleSave} className='ButtonHover' style={{ background: 'none', width: '10rem', fontWeight: 'bold', borderColor: '#B2C0CF', color: '#1CABFC' }}>{'Save!'}</Button>
          }

        </Row>
        </Col>
      </Row>
  )
}

export default CourseComponentPopup
