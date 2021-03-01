import React from "react";
import PropTypes from "prop-types";

export const ContactSection = ({ description, image }) => {
  return (
    <section
      className="section-wrap section--gradient"
      id="contact"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `25% 38%`,
        backgroundAttachment: `fixed`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container">
        <div
          className="columns"
          style={{
            height: "35rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="column is-10 is-offset-1" style={{ marginLeft: 0 }}>
            <div
              className="section"
              style={{
                backgroundColor: "rgb(255, 255, 255, 0.8)",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Contact us
              </h2>
              <div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
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
