import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import ReviewsList from './components/ReviewsList/ReviewsList';
import Pagination from './components/Pagination/Pagination';
import { setPage, setReviews } from './store/actions';
import { type ReviewsByLang, } from './types';
import './index.css';
import data from './data.json';

interface AppProps {
    language: string;
    page: number;
    setPage: (page: number) => void;
    setReviews: (reviews: ReviewsByLang) => void;
    reviews: ReviewsByLang;
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.setReviews(data as ReviewsByLang);
    }

    render() {
        const { language, page, setPage, reviews } = this.props;
        const reviewsForLang = reviews[language] || {};
        const totalReviews = Object.keys(reviewsForLang).length;
        const totalPages = Math.ceil(totalReviews / 10);

        return (
            <div>
                <Header />
                <main>
                    <ReviewsList reviews={reviewsForLang} currentPage={page} />
                    <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    language: state.language,
    page: state.page,
    reviews: state.reviews,
});

export default connect(mapStateToProps, { setPage, setReviews })(App);
