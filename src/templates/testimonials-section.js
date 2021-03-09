import React from "react";
import PropTypes from "prop-types";
import Testimonial from "../components/Testimonial";

export const TestimonialsSection = ({ heading, description, testimonials }) => (
  <section className="section-wrap section--gradient colored-section" id="testimonials">
    <div
      className="container container-border"
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px"
      }}
    >
      <div className="section">
        <div
          className="columns"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div className="column is-10">
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h2 className="has-text-weight-semibold is-size-2 raleway">{heading}</h2>
              <p className="is-size-5 has-text-weight-semibold">
                {description}
              </p>
            </div>
            <Testimonial data={testimonials} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

TestimonialsSection.propTypes = {
  testimonials: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    testimonials: PropTypes.array
  })
};
