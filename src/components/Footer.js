import React from "react";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container has-text-centered">
            <div
              style={{
                maxWidth: "100vw",
                display: "flex",
                flexDirection: "column",
              }}
              className="columns"
            >
              <img src={logo} alt="H2O Swimming logo" style={{ height: "1em" }} />
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/profile.php?id=100009389561256">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/pinkrainbowdiva/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
