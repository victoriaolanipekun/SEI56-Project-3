import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

const SortingRow = ({ drinks, filteredDrinks }) => {
  
  return (

    <Container className="sorting-row-wrapper">
      <Row className="buttons-row">
        <Col className="shop-drinks">
          <h3>Shop drinks</h3>
        </Col>
        <Col className="sorting-buttons">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </Col>
        <Col className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>

  )
    
  
}

export default SortingRow