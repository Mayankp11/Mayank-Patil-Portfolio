import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img 
                        src="/logo.png" // Replace with your actual logo path
                        alt="Portfolio Logo"
                        className="footer-image"
                    />
                </div>
                <div className="footer-text">
                    <p>© 2023 Your Name. All rights reserved.</p>
                    <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;