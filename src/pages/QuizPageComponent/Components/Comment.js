import React, { useEffect, useState } from 'react'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import { ReactComponent as Like } from '../../../svg/Like.svg'
import { ReactComponent as Dislike } from '../../../svg/Dislike.svg'
import { Avatar } from '@mui/material'
import { CalculateTimeAgo } from '../../../components/CalculateTime'

const Comment = ({ comment }) => {
    const [liked, setLiked] = useState(undefined);

  return (
      <div className='CommentHover' style={{ width: '100%', display: 'flex', margin: '1em', border:'1px solid #dee2e6',padding:'30px',borderRadius:'30px' ,cursor:'pointer'}}>
         
          <Row md={12}  >
              <Row>
                  <Col style={{ display: 'flex', justifyContent: 'flex-end' }} md={2}><Avatar src={`/static/${comment?.userImg}`} >{comment?.userName[0].toUpperCase()}</Avatar></Col>
                  <Col className='d-flex align-items-center justify-content-baseline' md={8}>
                      <strong style={{ margin: '0' }}>{comment?.userName}</strong>
                  </Col>
              </Row>
              <Row>
                <small>{comment?.description.slice(0,30)}...</small>
                  <small style={{ opacity: '0.5' }}>{ CalculateTimeAgo(comment?.updatedAt)}</small>
            </Row>
          </Row >
          <Row md={1}>
              <div style={{ opacity: `${liked === true ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(true)}>
                  <Like />
                  {comment?.likes}
              </div>
              <div style={{ opacity: `${liked === false ? '1' : '0.4'}`, cursor: 'pointer' }} onClick={() => setLiked(false)}>
                  <Dislike />
                  {comment?.dislikes}
              </div>
          </Row>

      </div>
        
  ) 
}

export default Comment
