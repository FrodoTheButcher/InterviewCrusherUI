import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import './Footer.css'
import {ReactComponent as Information} from '../svg/Information.svg'
import { ReactComponent as Explore } from '../svg/Explore.svg'
import { ReactComponent as Resources } from '../svg/Resources.svg'

const Footer = () => {
  return (
      <Container fluid style={{ width: '100vw', height: '50vh', padding:'20px',background:'rgb(28, 29, 31)'}}>
      <Row >
        <Col>
        <Row><h4 style={{color:'white'}}>Teach the world online with us</h4></Row>
        <Row><h5 style={{color:'white'}}> Create an online video course, reach students across the globe, and earn respect and money</h5></Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center'>
        <Button className='footerbtn' style={{background:'none',border:'1px solid white',color:'white',fontWeight:'bold'}}>Teach with us</Button>
        </Col>
      </Row>
         

          <Row style={{ borderTop: '1px  solid rgba(255, 255, 255, 0.5)' ,padding:'20px'}}>
              <Col md={8}>
                  <Row><h2 style={{ color: 'white' }}>95% Of our users are grateful that they choose <span style={{ fontWeight:'bold',color:'rgb(28, 171, 252)'}}>our path</span></h2></Row>
              </Col>
              <Col style={{color:'white'}} className='d-flex align-items-center justify-content-center'>
                 <Col className='FooterSocial'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" /></svg>
                      <p style={{ fontWeight: 'bolder' }}>Whatsapp</p>
                 </Col>   
                  <Col className='FooterSocial'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4L15 4C12.5 4 11 5.5 11 8V20"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" /></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M8 12H15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" /></path></g></svg>
                      <p style={{ fontWeight: 'bolder' }}>Facebook</p>
                  </Col> 
                  <Col className='FooterSocial'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4Zm-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z" /></g></svg>
                      <p style={{ fontWeight: 'bolder' }}>Youtube</p>
                  </Col> 
                  <Col className='FooterSocial'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;132" /></path><path stroke-dasharray="26" stroke-dashoffset="26" d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="26;0" /></path></g><circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1" /></circle></svg>
                      <p style={{ fontWeight: 'bolder' }}>Instagram</p>
                  </Col> 
              </Col>
          </Row>
          <Row style={{ borderTop: '1px  solid rgba(255, 255, 255, 0.5)',color:'white',paddingTop:'20px'}}>

                  <Col>
                  <Row>
                      <Row>
                          <Col >
                              <div className='FooterSvg'>
                                  <Information />
                              </div>
                              <strong>Information</strong>
                          </Col>
                      </Row>
                  </Row>
                      <Row><a href='' style={{color:'white',textDecoration:'none',margin:'0'}}> Business</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Teach</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Get the app</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>About us</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Contact us</a></Row>
                  </Col>

                  <Col>
                  <Row>
                      <Col>
                      <div className='FooterSvg'>
                              <Explore />

                      </div>
                          <strong>Explore</strong>
                      </Col>
                  </Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Career</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Blog</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Help and support</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Affiliate</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration:'none',margin:'0' }}>Investors</a></Row>
                  </Col>

                  <Col>
                  <Row>
                    <Col>
                    <div className='FooterSvg'>
                              <Resources />

                    </div>
                          <strong>Resources</strong>
                    </Col>
                  </Row>
                  <Row><a href='' style={{ color: 'white', textDecoration: 'none' }}>Terms</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration: 'none' }}>Privacy policy</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration: 'none' }}>Cookie settings</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration: 'none' }}>Sitemap</a></Row>
                  <Row><a href='' style={{ color: 'white', textDecoration: 'none' }}>Accessibility statement</a></Row>
                  </Col>

                    <Col>
                        <Row>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z" /><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" /><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416m208-208H48" /></svg>

                            <Button style={{background: 'none', marginLeft:'1rem',border: '1px solid white', color: 'white', display: 'flex', alignItems: 'baseline', justifyContent: 'center' }} className='footerbtn'>English</Button>
                        </div>
                        </Row>
                        <Row>
                      <div style={{marginTop:'2rem', opacity:'0.8',position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                          @ 2023 InterviewCrusher
                      </div>
                        </Row>
                       

                    </Col>            
          </Row>
    </Container>
  )
}

export default Footer
