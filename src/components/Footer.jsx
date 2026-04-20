import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#hero" className="footer-logo">PageMint</a>
        <p>Clean, modern websites that won't break the bank.</p>
        <div className="footer-links">
          <a href="mailto:pagemint01@gmail.com">pagemint01@gmail.com</a>
          <a href="https://instagram.com/pagemintweb" target="_blank" rel="noopener noreferrer">@pagemintweb</a>
        </div>
      </div>
      <p className="footer-bottom">Designed and built by Derinsola Oduwole.</p>
      <p className="footer-bottom">&copy; 2026 PageMint. All rights reserved. </p>
    </footer>
  );
}