import React from "react";
import PropTypes from "prop-types";

export const WaiverSection = ({ title, description, waiverLink }) => {
  return (
    <section className="section-wrap section--gradient" id="waiver">
      <div className="container container-border">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section" style={{ textAlign: "center" }}>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light raleway">
                {title}
              </h2>
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                {description}
              </h3>
              <div className="columns">
                <div className="column is-12">
                  <a
                    className="btn"
                    href={waiverLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View waiver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WaiverSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  waiverLink: PropTypes.string.isRequired
};
