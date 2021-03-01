import React from "react";
import PropTypes from "prop-types";

export const HoursSection = ({ hours }) => (
  <section
    className="section-wrap section--gradient"
    id="hours"
  >
    <div className="container container-border">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div style={{ textAlign: "center" }}>
              <h2 className="has-text-weight-semibold is-size-2">
                {hours.heading}
              </h2>
              <p className="is-size-5" style={{ paddingBottom: "1rem" }}>
                {hours.description}
              </p>
            </div>
            <div className="columns">
              {hours.days.map((d) => (
                <div key={d.plan} className="column">
                  <section
                    className="section"
                    style={{ padding: "0.5rem 1.5rem" }}
                  >
                    <h4
                      className="has-text-centered has-text-weight-semibold"
                      style={{
                        fontSize: 24,
                        textDecoration: "underline",
                        paddingBottom: 8,
                      }}
                    >
                      {d.day}
                    </h4>
                    <p
                      className="has-text-weight-semibold has-text-centered has-text-primary"
                      style={{ fontSize: 18 }}
                    >
                      {d.topic}
                    </p>
                    <p className="has-text-weight-semibold has-text-centered">
                      {d.description}
                    </p>
                  </section>
                </div>
              ))}
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img
                src={
                  !!hours.image.childImageSharp
                    ? hours.image.childImageSharp.fluid.src
                    : hours.image
                }
                alt="kids swimming"
                style={{ height: 270, marginTop: 45 }}
              />
            </div>
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
