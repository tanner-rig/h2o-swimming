import React from "react";
import PropTypes from "prop-types";

export const AboutSection = ({
  title,
  body,
  subtitle,
  image,
  backgroundImage,
}) => {
  return (
    <section
      className="section-wrap section--gradient colored-section"
      id="about"
      style={{
        backgroundImage: `url(${
          !!backgroundImage.childImageSharp
            ? backgroundImage.childImageSharp.fluid.src
            : backgroundImage
        })`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: '50%',
        padding: '100px 16px'
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "5px",
        }}
      >
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
