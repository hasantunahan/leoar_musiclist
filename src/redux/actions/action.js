import axios from 'axios';
import { BASE_URL } from '../../core/app/constant/applicationconstant';

export const getMusicList = () => dispatch => {
  console.log('actiona geldi');
  dispatch({ type: 'setMusicDataStart' });
  try {
    axios
      .get(`${BASE_URL}musicData.json`)
      .then(res => dispatch({ type: 'setMusicData', payload: res.data }))
      .catch(err =>
        dispatch({ type: 'setMusicDataError', payload: err.response.data.message }),
      );
  } catch (e) {
    dispatch({ type: 'setMusicDataError', payload: e })
  }
};

export const selectedCategories = categories => dispatch => {
  dispatch({ type: 'selectedCategories', payload: categories });
};
