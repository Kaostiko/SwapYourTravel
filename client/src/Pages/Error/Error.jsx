import React from 'react'
import { Button, Col } from 'react-bootstrap'
import "./error.scss"
import { useNavigate } from 'react-router-dom'

export const Error = () => {
  const navigate = useNavigate();
  return (
    <Col className='fondoError'>
      <div className='marcoError'>
        <h2>Upps!! La página que intenta acceder no existe</h2>
        <Button className='Buttonn' onClick={()=> navigate("/")}>Volver a la página principal</Button>
      </div>
    </Col>
  )
}
