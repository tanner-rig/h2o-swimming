import React from "react";
import PropTypes from "prop-types";

export const AboutSection = ({ title, body, subtitle }) => {
  console.log("BODY: ", body);

  return (
    <section className="section-wrap section--gradient colored-section" id="about">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                {subtitle}
              </h3>
              <div className="content" dangerouslySetInnerHTML={{ __html: body}} />
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
