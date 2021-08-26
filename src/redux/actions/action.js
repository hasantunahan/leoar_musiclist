import axios from "axios"
import { useDispatch } from "react-redux"
import { BASE_URL } from "../../core/app/constant/applicationconstant";

export const getUserList = (token) => dispatch => {
    dispatch({ type: 'setMusicDataStart' });
    axios
        .get(`${BASE_URL}musicData.json`)
        .then(res => dispatch({ type: 'setMusicData', payload: res.data }))
        .catch(err => dispatch({ type: 'setMusicDataError', payload: err.response.data.message }))
}
