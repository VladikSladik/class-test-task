export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_REVIEWS = 'SET_REVIEWS';

export const setLanguage = (lang: string) => ({
    type: SET_LANGUAGE,
    payload: lang,
});

export const setPage = (page: number) => ({
    type: SET_PAGE,
    payload: page,
});

export const setReviews = (reviews: any) => ({
    type: SET_REVIEWS,
    payload: reviews,
});
