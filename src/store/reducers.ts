import { SET_LANGUAGE, SET_PAGE, SET_REVIEWS } from './actions';

const initialState = {
    language: 'ru',
    page: 1,
    reviews: {},
};

export default function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.payload, page: 1 };
        case SET_PAGE:
            return { ...state, page: action.payload };
        case SET_REVIEWS:
            return { ...state, reviews: action.payload };
        default:
            return state;
    }
}
