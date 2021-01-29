import React from "react";

const Footer = (props) => {
  const date = new Date();
  return (
    <footer className="bck_red">
      <div className="footer_copyright">©{date.getFullYear()} All Rights Reserved</div>
    </footer>
  )
}

export default Footer;
