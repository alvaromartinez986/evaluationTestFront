import PropTypes from 'prop-types';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const SystemPropertyForm = ({
  inputChangedHandler,
  systemPropertyHandler,
  error,
  submited
}) => {
  return (
    <Container className="my-3">
      {submited && (
        <Alert variant={error ? 'danger' : 'success'}>
          {error
            ? `Error: ${error.statusCode}. ${error.message}`
            : 'System property created'}
        </Alert>
      )}
      <Form onSubmit={systemPropertyHandler}>
        <Form.Label as="h5">System Property</Form.Label>
        <Form.Group className="mb-3" name="formName">
          <Form.Label>Propery name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a property name"
            name="name"
            onChange={inputChangedHandler}
          />
          <Form.Text className="text-muted">Property name</Form.Text>
        </Form.Group>

        <Form.Group
          type="text"
          placeholder="Enter a property name"
          controlId="formValue"
        >
          <Form.Label>Value</Form.Label>
          <Form.Control
            type="value"
            placeholder="Enter a value"
            name="value"
            onChange={inputChangedHandler}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={systemPropertyHandler}
          className="my-3"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

SystemPropertyForm.propTypes = {
  systemPropertyHandler: PropTypes.func,
  inputChangedHandler: PropTypes.func
};

export default SystemPropertyForm;
