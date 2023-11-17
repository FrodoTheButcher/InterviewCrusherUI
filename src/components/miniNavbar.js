import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import { useEffect,useState } from 'react'
import { WorkToOurCompany,WebDevelopment,MachineLearning,ArtificialIntelligence,DevOps,DataStructure,Interviews,GetHiredNow,WorkWithUs } from '../Constants/MiniNavbarConstants'
const MiniNavbar = () => {
    const [handleFocus, setHandleFocus] = useState(false)
    const [navData, setNavData] = useState([])
    const handleFocusChange = (value) => {
        setHandleFocus(value);
    };
  
    return (
        <>
            <Row
                onMouseEnter={() => handleFocusChange(true)}
                onMouseLeave={() => handleFocusChange(false)}
                fluid
                style={{
                    border: '1px solid black',
                    zIndex: '2',
                    background: 'white',
                    height: '5rem',
                    width: '100vw',
                    position: 'relative',
                    marginTop:'5em'
                }}
            >        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(WorkToOurCompany)}>Work to our company</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(WebDevelopment)}>Web Development</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(MachineLearning)}>Machine Learning</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(ArtificialIntelligence)}>Artificial Intelligence</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(DevOps)}>DevOps and Development</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(DataStructure)}>Data Structure and Algorithms</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(Interviews)}>Interview and Internships</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(GetHiredNow)}>Get Hired Now!</p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="miniTitle" style={{ margin: '0' }} onMouseEnter={() => setNavData(WorkWithUs)}>Work with Us</p>
                </Col>
            </Row>
            <Row fluid style={{ opacity: handleFocus ? '1' : '0',display:!handleFocus && 'none', border: '1px solid black', backgroundColor: 'rgba(28, 29, 31)', zIndex: '2', width: '100vw', position: 'relative' }}>
                {
                    navData.map(e => <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <p className="miniTitle" style={{ margin: '0', color: 'white' }}>{e}</p>
                    </Col>)
                }


            </Row>
        </>
    )
}

export default MiniNavbar
