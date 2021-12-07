import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchSystemProperties = () => {
  return {
    type: actionTypes.FETCH_SYSTEM_PROPERTIES_START
  };
};

export const setSystemProperties = (systemProperties) => {
  return {
    type: actionTypes.SET_SYSTEM_PROPERTIES,
    systemProperties
  };
};

export const failGetSystemProperties = (error) => {
  return {
    type: actionTypes.FETCH_SYSTEM_PROPERTIES_FAILED,
    error
  };
};

export const systemPropertySucess = (systemProperty) => {
  return {
    type: actionTypes.SYSTEM_PROPERTY_SUCCESS,
    systemProperty
  };
};

export const initSystemProperties = () => {
  return (dispatch) => {
    dispatch(fetchSystemProperties());
    axios
      .get('/system-property')
      .then((response) => {
        dispatch(setSystemProperties(response.data));
      })
      .catch((error) => {
        dispatch(failGetSystemProperties());
      });
  };
};

export const createSystemProperty = (systemPropertyData) => {
  return (dispatch) => {
    dispatch(fetchSystemProperties());
    axios
      .post(`/system-property`, systemPropertyData)
      .then((response) => {
        dispatch(systemPropertySucess(response.data));
      })
      .catch((error) => {
        dispatch(failGetSystemProperties(error.response.data));
      });
  };
};
