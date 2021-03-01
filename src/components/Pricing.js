import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="pricing-column">
    {data.map((price) => (
      <div key={price.plan}>
        <section
          className="section"
          style={{
            border: "2px solid #1d28fa",
            background: "#fff",
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            margin: 16,
          }}
        >
          <h4 className="has-text-centered has-text-weight-semibold is-size-5">
            {price.plan}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${price.price}
          </h2>
          <p className="has-text-weight-semibold has-text-centered">
            {price.description}
          </p>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
    })
  ),
};

export default Pricing;
