// dataActions.js
import axios from 'axios';

export const fetchDataRequest = () => ({ type: 'FETCH_DATA_REQUEST' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataFailure = (error) => ({ type: 'FETCH_DATA_FAILURE', payload: error });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get('https://localhost:7048/api/Item/GetItem');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};