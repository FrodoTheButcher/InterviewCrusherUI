import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDocumentationByIdAction } from '../../actions/documentation'
import Loader from '../../components/Spinner'
import ErrorPrinter from '../../actions/errorPrinter'
import { Accordion, Container } from 'react-bootstrap'
import { AccordionDetails, AccordionSummary, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../WrittenCoursePage/WrittenCourse.css"
import { addBlueColorToUppercase } from '../WrittenCoursePage/Components/AddColor'
import { primaryBlue, secondaryGray } from '../../Static/Colors'
const DocumentationPage = () => {


  const {pk} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDocumentationByIdAction(pk))
  },[pk])

  const {loading,error,data} = useSelector(state=>state.getDocumentationByIdReducer)

  if(loading || !data){
    return <Loader/>
  }
  if(error)
  {
    return (
      ErrorPrinter(error)
    )
  }
  
  return (
    <div className='WrittenCourse'  style={{width:'100vw', width: '100vw'}}>
      <Container>

      </Container>
      <Container>
        <Typography variant="h3">
          {addBlueColorToUppercase(data.name,primaryBlue)}
        </Typography>
        <Typography variant="h5">
        {addBlueColorToUppercase(data.description,primaryBlue)}
        </Typography>
      </Container>
      <Container >
      <Accordion >
        {
          data && data.steps &&
          data.steps.map(step=>
            <Container key={step.id}>
              <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <Typography sx={{textDecoration:'underline'}}>{addBlueColorToUppercase(`STEP NR: ${step.step} ${step.name}`,primaryBlue)}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography sx={{fontSize:'2em'}} >
                {
                  addBlueColorToUppercase(step.description,primaryBlue)
                }
             </Typography>
             <img src={step?.image} />
             <Tooltip title="Start reading">
             </Tooltip>
           </AccordionDetails>
            </Container>
            )
        }   
      </Accordion>
      </Container>
      <Container>
      <Typography sx={{fontWeight:'bolder',fontSize:'2em',color:secondaryGray}}>The end of the discussion...</Typography>
         <Typography sx={{fontSize:'1.5em'}}>
         {data.end_of_documentation}
         </Typography>
      </Container>
    </div>
  )
}

export default DocumentationPage
