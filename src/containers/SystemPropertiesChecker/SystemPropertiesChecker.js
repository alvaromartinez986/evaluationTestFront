import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableDisplay from '../../components/TableDisplay/TableDisplay';
import SystemPropertyForm from '../../components/SystemPropertyForm/SystemPropertyForm';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Container, Spinner } from 'react-bootstrap';

const SystemPropertiesChecker = ({
  loading,
  onInitSystemProperties,
  onSystemPropertyCreate,
  systemProperties,
  error
}) => {
  const [systemPropertyForm, setSystemPropertyForm] = useState({
    name: '',
    value: ''
  });
  const [submited, setSubmited] = useState(false);

  let systemPropertiesElement;
  useEffect(() => {
    onInitSystemProperties();
  }, [onInitSystemProperties]);

  const inputChangedHandler = (event) => {
    const updatedForm = {
      ...systemPropertyForm
    };
    updatedForm[event.target.name] = event.target.value;
    setSystemPropertyForm(updatedForm);
  };

  const systemPropertyHandler = (event) => {
    event.preventDefault();
    setSubmited(true);
    onSystemPropertyCreate(systemPropertyForm);
  };

  systemPropertiesElement = loading ? (
    <Container className="m-5">
      <Spinner animation="border" />
    </Container>
  ) : (
    <TableDisplay elements={systemProperties} />
  );

  return (
    <div>
      {systemPropertiesElement}
      <hr />
      <SystemPropertyForm
        inputChangedHandler={inputChangedHandler}
        systemPropertyHandler={systemPropertyHandler}
        error={error}
        submited={submited}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    systemProperties: state.systemProperties,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSystemProperties: () => dispatch(actions.initSystemProperties()),
    onSystemPropertyCreate: (systemPropertyData) =>
      dispatch(actions.createSystemProperty(systemPropertyData))
  };
};

SystemPropertiesChecker.propTypes = {
  loading: PropTypes.bool.isRequired,
  onInitSystem: PropTypes.func,
  onSystemPropertyCreate: PropTypes.func,
  systemProperties: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemPropertiesChecker);
