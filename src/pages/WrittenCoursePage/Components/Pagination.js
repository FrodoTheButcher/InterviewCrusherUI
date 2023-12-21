import * as React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useDispatch, useSelector } from 'react-redux';
import { getWrittenCoursesAction } from '../../../actions/writtenCourse';

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const {chapter,page,roadmap} = useParams()

  const { loading, error, writtenCourses } = useSelector(state => state.getWrittenCoursesReducer);
    const dispatch = useDispatch()
  React.useEffect(()=>{
    if( writtenCourses === undefined && loading == undefined && error == undefined )
    {
        dispatch(getWrittenCoursesAction(chapter))
    }
  },[])
  const handlePageChange = (event,pageNr) => {
    event.preventDefault()
    const selectedCourse = writtenCourses.summaries[pageNr-1];
    if (selectedCourse && selectedCourse.id) {
      navigate(`/writtenCourseLecture/${roadmap}/${chapter}/${selectedCourse.id}/${pageNr}/`);
    }
  };
  
  React.useEffect(()=>{
 console.log("wr",writtenCourses)
  },[writtenCourses])
  return (
    <Pagination
      page={page === undefined ? 1 : parseInt(page)}
      count={writtenCourses?.summaries?.length}
      onChange={(event, newPage) => handlePageChange(event,newPage)}
      renderItem={(item) => (
        <PaginationItem
          component="button"
          onClick={(event) => handlePageChange(item.page,event)}
          {...item}
        />
      )}
    />
  );
}

export default function PaginationButton() {
  return <Content />;
}
