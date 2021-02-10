import React from "react";
import PropTypes from "prop-types";
import Pricing from "../components/Pricing";

export const PricingSection = ({ pricing, hours, image }) => (
  <div className="content" id="pricing">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            {/* <div className="column is-10 is-offset-1">
              <p className="has-text-weight-semibold is-size-2">{hours}</p>
            </div> */}
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
  </div>
);

PricingSection.propTypes = {
  hours: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};
