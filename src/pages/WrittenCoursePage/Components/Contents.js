import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import { Button } from 'react-bootstrap';
import { Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getWrittenCoursesAction } from '../../../actions/writtenCourse';
import Loader from '../../../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPrinter from '../../../actions/errorPrinter';
import Difficulty from '../../../components/Difficulty';
export default function Contents() {
  
  const {chapter:pk,roadmap} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loading,error,writtenCourses} = useSelector(state => state.getWrittenCoursesReducer)
  React.useEffect(() => {
    dispatch(getWrittenCoursesAction(roadmap))
  }, [])
  

  if(loading)
  return (
    <Loader/>
    )
  if(error)
  {
    return (
      <ErrorPrinter>
        {error}
      </ErrorPrinter>
    )
  }
  return (
    <div >
      {writtenCourses?.summaries?.map(course=>
           <Accordion key={course?.id}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <Typography>{course?.name}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
               {course?.description}
             </Typography>
             <Tooltip title="Start reading">
             <Button onClick={()=>navigate(`/writtenCourseLecture/${pk}/${course?.id}/`)}>
                <NotStartedIcon/>
             </Button>
             </Tooltip>
             <Difficulty Difficulty={course.difficulty}/>
           </AccordionDetails>
         </Accordion>
        )}  

    </div>
  );
}