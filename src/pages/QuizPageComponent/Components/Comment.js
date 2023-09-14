import React, { useEffect, useState } from 'react'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import { ReactComponent as Like } from '../../../svg/Like.svg'
import { ReactComponent as Dislike } from '../../../svg/Dislike.svg'

const Comment = ({ comment, quiz }) => {
    const [liked, setLiked] = useState(undefined);
    const [currentDate, setCurrentDate] = useState(null);
    const [updatedAt, setUpdatedAt] = useState(null);
    const [daysDifference, setDaysDifference] = useState(null);

    useEffect(() => {
        setCurrentDate(new Date());
        // Parse the updatedAt string into a Date object
        setUpdatedAt(new Date(comment?.updatedAt));

        // Calculate the difference in days
        if (currentDate !== null && updatedAt !== null) {
            const timeDifference = currentDate - updatedAt;
            const diffInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
            setDaysDifference(diffInDays);
        }
    }, [quiz]);
  return (
      <div className='CommentHover' style={{ width: '100%', display: 'flex', margin: '1em', border:'1px solid #dee2e6',padding:'15px',borderRadius:'30px' ,cursor:'pointer'}}>
         
          <Row md={10}  >
              <Row>
                  <Col style={{ display: 'flex', justifyContent: 'flex-end' }} md={2}><Image src={`/static/${comment?.userImg}`}/></Col>
                  <Col className='d-flex align-items-center justify-content-baseline' md={8}>
                      <strong style={{ margin: '0' }}>{comment?.userName}</strong>
                      <small style={{ marginLeft: '1em' }}>{daysDifference !== null && `${daysDifference} days ago`}</small>
                  </Col>
              </Row>
              <Row><small>{comment?.description.slice(0,30)}...</small></Row>
          </Row >
          <Row md={1}>
              <div style={{ opacity: `${liked == true ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(true)}>
                  <Like />
                  125
              </div>
              <div style={{ opacity: `${liked == false ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(false)}>
                  <Dislike />
                  120
              </div>
          </Row>

      </div>
        
  ) 
}

export default Comment
