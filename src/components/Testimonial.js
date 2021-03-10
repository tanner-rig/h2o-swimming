import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ data = [] }) => (
  <div
    className="testimonial-column"
    style={{ display: "flex", flexDirection: "column" }}
  >
    {data.map((testimonial, i) => (
      <div key={`testimonial-${i}`}>
        <section style={{ padding: "1.5rem" }}>
          <div style={{ display: "flex", width: "100%", marginBottom: "16px" }}>
            <h3
              className="title is-size-5 has-text-weight-bold is-bold-light"
              style={{
                width: "fit-content",
              }}
            >
              {testimonial.name}
            </h3>
          </div>

          <p
            className="has-text-weight-semibold"
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
      description: PropTypes.string,
    })
  ),
};

export default Testimonial;
