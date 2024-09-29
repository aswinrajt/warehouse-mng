import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
  <>
   <div className="container-fluid bg-info p-3">
    <Row>
        <Col>
        <h4>WarehousePro</h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis optio iusto dolorem harum beatae ea voluptatum neque, iure nemo minus reiciendis dicta tenetur pariatur ex dignissimos impedit modi unde.</p>
        </Col>
        <Col>
        <h4>Links</h4>
        <div className='d-flex flex-column'>
            <Link to={'/'} className='text-dark'>Landing</Link>
            <Link to={'/dash'} className='text-dark'>Dashboard</Link>
            </div>
            </Col>
        <Col>
        <h4>feedback</h4>
        <textarea className='form-control mt-3' name="" id=""></textarea>
        <button className="btn btn-dark mt-3">Submit</button>
        </Col>
    </Row>


  </div>
  
  </>
  )
}

export default Footer