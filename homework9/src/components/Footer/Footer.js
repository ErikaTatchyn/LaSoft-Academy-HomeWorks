import React from "react";

import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">
          © Simple Art, Inc. {year} <br />
          All rights reserved
        </div>
        <div className="footer-terms">
          <span className="footer-term">Terms</span>
          <span className="footer-term">Privacy policy</span>
          <span className="footer-term">Help & Support</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
