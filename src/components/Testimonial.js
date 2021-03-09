import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ data = [] }) => (
  <div className="pricing-column">
    {data.map((testimonial, i) => (
      <div key={`testimonial-${i}`}>
        <section
          className="section"
        >
          <div style={{ display: 'flex', justifyContent: "center", width: "100%", marginBottom: '16px' }}>
            <h3
              className="title is-size-5 has-text-weight-bold is-bold-light"
              style={{
                padding: "16px",
                borderBottom: "3px solid #024966",
                width: "fit-content"
              }}
            >
              {testimonial.name}
            </h3>
          </div>

          <p
            className="has-text-weight-semibold has-text-centered"
            style={{ fontSize: "0.9rem" }}
          >
            "{testimonial.description}"
          </p>
        </section>
      </div>
    ))}
  </div>
);

Testimonial.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string
    })
  )
};

export default Testimonial;
