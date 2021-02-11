import React from "react";
import PropTypes from "prop-types";

export const ContactSection = ({ description }) => {
  return (
    <section
      className="section-wrap section--gradient colored-section"
      id="contact"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Contact us
              </h2>
              <div>
              {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  email: PropTypes.string,
};
