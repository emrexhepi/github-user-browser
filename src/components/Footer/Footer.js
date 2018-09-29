import React from 'react';

// import components
import { Footer as FooterComponent} from "mdbreact";

const Footer = () => {
  return (
    <FooterComponent color="mdb-color" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">© 2018 
        <a href="https://github.com/emrexhepi/github-user-browser"> Open Source Projcet</a>
      </div>
    </FooterComponent>
  )
}

export default Footer;
