export interface Review {
    name: string;
    review: string;
    date: string;
}

export type ReviewsByLang = {
    [lang: string]: {
        [clientId: string]: Review;
    };
};
