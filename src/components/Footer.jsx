import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import '../styles/App.css'


const Footer = () => {
  return (
    <Container>
      <Jumbotron>
        <h3 className='font-sriracha'>Build a Recipe App With React</h3><br/>
        <h5 className='font-sriracha'>
          &copy;2021 Esrafil Elahi
        </h5>
      </Jumbotron>
    </Container>
  )
}

export default Footer
