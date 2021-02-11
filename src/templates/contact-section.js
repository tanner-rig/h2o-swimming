import React from "react";
import PropTypes from "prop-types";

export const ContactSection = ({ email }) => {
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
                Contact Coach Jenny at <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div style={{ width: 500, paddingTop: 16, fontWeight: 500 }}>
                *Please include full name, child’s full name (if you are the
                parent/guardian), any previous swim expereince and class you’d
                like to sign up for.{" "}
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
