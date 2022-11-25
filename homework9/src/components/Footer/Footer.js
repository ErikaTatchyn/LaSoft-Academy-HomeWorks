import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">
          © Simple Art, Inc. 2021 <br />
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
