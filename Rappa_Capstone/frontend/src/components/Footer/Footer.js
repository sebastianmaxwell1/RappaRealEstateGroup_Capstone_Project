import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default class Footer extends Component {
    render() {
        const { className } = this.props;
        const footerClass = `footer-wrapper ${className}`;
        return (
            <div className={footerClass}>
                <div className="row-container">
                    <div className="col l4">
                        <ul className="nav-links">
                            <a href="/#">Home</a> | <a href="/listings">Listings</a> | <a href="/contact">Contact</a> | <a href="/login">Login</a> | <a href="/about">Team Rappa</a>
                        </ul>
                    </div>
                    <div className="col l8">
                        <div className="copyright-wrapper">
                            <span className="copyright">2021 Rappa Realty Group</span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: ''
};