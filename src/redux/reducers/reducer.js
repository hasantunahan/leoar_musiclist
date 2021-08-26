const INITIAL_STATE = {
    data: '',
    err: '',
    isLoading: false
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'setMusicDataStart':
            return { ...state, err: '', isLoading: true, data: 'hello' };

        case 'setMusicData':
            return { ...state, data: action.payload, isLoading: false };

        case 'setMusicDataError':
            return { ...state, err: action.payload, isLoading: false }

        default:
            return state;

    }

}