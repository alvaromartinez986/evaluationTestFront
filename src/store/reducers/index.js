import * as actionTypes from '../actions/actionTypes';

const initialState = {
  systemProperties: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SYSTEM_PROPERTIES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SET_SYSTEM_PROPERTIES:
      return {
        ...state,
        systemProperties: action.systemProperties,
        loading: false
      };
    case actionTypes.FETCH_SYSTEM_PROPERTIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.SYSTEM_PROPERTY_SUCCESS:
      const systemProperties = [...state.systemProperties];
      systemProperties.push(action.systemProperty);
      return {
        ...state,
        error: null,
        systemProperties,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
