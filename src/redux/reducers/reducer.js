const INITIAL_STATE = {
  data: '',
  err: '',
  isLoading: false,
  categories: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setMusicDataStart':
      return {...state, err: '', isLoading: true};

    case 'setMusicData':
      return {...state, data: action.payload, isLoading: false};

    case 'setMusicDataError':
      return {...state, err: action.payload, isLoading: false};

    case 'setCategories':
      return {...state, categories: action.payload};

    case 'selectedCategories': {
      return {...state, categories: action.payload};
    }
    default:
      return state;
  }
};
