import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Spinner } from 'react-bootstrap';
import { ErrorPrinter } from '../../../actions/errorPrinter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAvaialableRoadmaps } from '../../../actions/roadmapGetAllAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ListItemIcon } from '@mui/material';
export default function SelectRoadmaps({setSchedule}) {
  const [age, setAge] = React.useState('');
  const dispatch = useDispatch()
  const roadmapList = useSelector(state => state.getAvaialableRoadmapsReducer)
  const { loading, error, roadmaps } = roadmapList;
  const [roadmap,setRoadmap] = React.useState(null)
  const [roadmapSelected,setRoadmapSelected] = React.useState({
    roadmapId:null,
    name:"Select a roadmap"
  })
  const handleChange = (event) => {

    const isScheduleAvailable = roadmap.find((roadmap)=>roadmap.id === event.target.value.id)
console.log("isScheduleAvailable",isScheduleAvailable)
    if(isScheduleAvailable.available)
    {
      setSchedule((prev)=>({...prev,roadmapId:event.target.value.id}))
      setRoadmapSelected(event.target.value)
    }
    else
    {
      setSchedule((prev)=>({...prev,roadmapId:null}))
      setRoadmapSelected({roadmapId:null,title:"You don't own the roadmap"})
    }
 
  };
  useEffect(()=>{
    dispatch(getAvaialableRoadmaps())
  },[])


  useEffect(() => {
    if (roadmaps) {
      console.log("roadmaps", roadmaps);
      let roadmapsArray = [];
      if (roadmaps.available) {
        roadmapsArray.push(...roadmaps.available.map((roadmap) => ({ ...roadmap, available: true })));
      }
      if (roadmaps.unavailable) {
        roadmapsArray.push(...roadmaps.unavailable.map((roadmap) => ({ ...roadmap, available: false })));
      }
      setRoadmap(roadmapsArray);
    }
  }, [roadmaps]);

  if(loading)
  {
    return (
      <Spinner/>
    )
  }
  if(error)
  {
    return (
      <ErrorPrinter error={error}/>
    )
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{roadmapSelected?.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={roadmapSelected.id}
          label={roadmapSelected.title}
          onChange={handleChange}
        >
        {
          roadmap && roadmap?.map((roadmap)=>{
            return (
              <MenuItem   value={roadmap}>
                
                  <ListItemIcon>
                    <ShoppingCartIcon sx={{opacity:roadmap.available ? 0.1 : 1,cursor:'pointer'}} />
                  </ListItemIcon>
                  {roadmap.title}
              </MenuItem>
            )
          })
        }
        </Select>
      </FormControl>
    </Box>
  );
}
