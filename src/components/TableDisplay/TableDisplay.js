import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row } from 'react-bootstrap';

const TableDisplay = ({ elements }) => {
  return (
    <Container className="my-3">
      <h3>System properties</h3>
      <Row>
        {elements.map((element) => (
          <Card key={element.id}>
            <Card.Header as="h5">{element.name}</Card.Header>
            <Card.Body>
              <Card.Text>{element.value}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

TableDisplay.propTypes = {
  elements: PropTypes.array
};

export default TableDisplay;
