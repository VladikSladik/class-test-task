import React from 'react';
import './reviewsList.css';
import { type Review } from '../../types';

interface ReviewsListProps {
    reviews: { [clientId: string]: Review };
    currentPage: number;
}

class ReviewsList extends React.Component<ReviewsListProps> {
    formatName = (fullName: string) => {
        const parts = fullName.trim().split(' ');
        if (parts.length === 1) return parts[0];
        if (parts.length === 2) return `${parts[0]} ${parts[1][0]}.`;
        return `${parts[0]} ${parts[1][0]}.`;
    };

    render() {
        const { reviews, currentPage } = this.props;
        const allReviews = Object.values(reviews);
        const startIndex = (currentPage - 1) * 10;
        const pageReviews = allReviews.slice(startIndex, startIndex + 10);

        return (
            <div className="reviews-container">
                {pageReviews.map((review, idx) => (
                    <div key={idx} className="review-card">
                        <h3>{this.formatName(review.name)}</h3>
                        <p>{review.review}</p>
                        <span>{review.date}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default ReviewsList;
