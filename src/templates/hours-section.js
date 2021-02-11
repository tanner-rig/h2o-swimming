import React from "react";
import PropTypes from "prop-types";

export const HoursSection = ({ hours }) => (
  <section className="section-wrap section--gradient" id="hours">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="has-text-weight-semibold is-size-2">
              {hours.heading}
            </h2>
            <p className="is-size-5">{hours.description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

HoursSection.propTypes = {
  hours: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
};
