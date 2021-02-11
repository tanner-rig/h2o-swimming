import React from "react";
import PropTypes from "prop-types";

export const ContactSection = ({ description, image }) => {
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
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div>
                {image && (
                  <img
                    src={
                      !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    }
                    alt="Jenny's pool"
                    style={{ height: 270, marginTop: 45 }}
                  />
                )}
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
