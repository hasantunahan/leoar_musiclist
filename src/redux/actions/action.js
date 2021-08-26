import axios from "axios"
import { BASE_URL } from "../../core/app/constant/applicationconstant";

export const getMusicList = () => dispatch => {
    console.log("actiona geldi");
    dispatch({ type: 'setMusicDataStart' });
    axios
        .get(`${BASE_URL}musicData.json`)
        .then(res => dispatch({ type: 'setMusicData', payload: res.data }))
        .catch(err => dispatch({ type: 'setMusicDataError', payload: err.response.data.message }))
}
