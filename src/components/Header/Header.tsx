import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../store/actions';
import Watch from '../Watch/Watch';
import './header.css';

interface HeaderProps {
    language: string;
    setLanguage: (lang: string) => void;
}

class Header extends React.Component<HeaderProps> {
    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.setLanguage(e.target.value);
    };

    render() {
        return (
            <header className="header">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Logo"
                    className="logo"
                />
                <select
                    className="lang-select"
                    value={this.props.language}
                    onChange={this.handleChange}
                >
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <Watch />
            </header>
        );
    }
}

const mapStateToProps = (state: any) => ({
    language: state.language,
});

export default connect(mapStateToProps, { setLanguage })(Header);
