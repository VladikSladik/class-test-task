import React from 'react';
import './pagination.css';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

class Pagination extends React.Component<PaginationProps> {
    renderPages() {
        const { totalPages, currentPage } = this.props;
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            if (currentPage > 2 && currentPage < totalPages - 1) pages.push(currentPage);
            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }

        return pages.map((page, index) => (
            <button
                key={index}
                className={`page-btn ${page === currentPage ? 'active' : ''}`}
                onClick={() => typeof page === 'number' && this.props.onPageChange(page)}
                disabled={typeof page !== 'number'}
            >
                {page}
            </button>
        ));
    }

    render() {
        return <div className="pagination">{this.renderPages()}</div>;
    }
}

export default Pagination;
