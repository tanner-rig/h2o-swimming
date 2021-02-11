import React from "react";
import PropTypes from "prop-types";
import Pricing from "../components/Pricing";

export const PricingSection = ({ pricing, image }) => (
  <section className="section-wrap section--gradient colored-section" id="pricing">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="has-text-weight-semibold is-size-2">
              {pricing.heading}
            </h2>
            <p className="is-size-5">{pricing.description}</p>
            <Pricing data={pricing.plans} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

PricingSection.propTypes = {
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};
