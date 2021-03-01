import React from "react";
import PropTypes from "prop-types";

export const AboutSection = ({ title, body, subtitle, image }) => {
  return (
    <section
      className="section-wrap section--gradient colored-section"
      id="about"
    >
      <div className="container container-border">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2
                className="title is-size-3 has-text-weight-bold is-bold-light"
                style={{ textAlign: "center" }}
              >
                {title}
              </h2>
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                {subtitle}
              </h3>
              <div className="about-content-wrap">
                <div
                  className="content about-content"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={
                      !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    }
                    alt="coach jenny"
                    style={{ height: 350, width: 262.45 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
