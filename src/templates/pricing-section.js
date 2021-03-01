import React from "react";
import PropTypes from "prop-types";
import Pricing from "../components/Pricing";
import venmoLogo from "../img/venmo_logo_blue.svg";
import venmoIcon from "../img/venmo-icon.png";

export const PricingSection = ({
  heading,
  description,
  plans,
  image,
  venmo,
}) => (
  <section
    className="section-wrap section--gradient colored-section bg-image-style"
    id="pricing"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
    }}
  >
    <div
      className="container"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "5px",
      }}
    >
      <div className="section">
        <div
          className="columns"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="column is-10">
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h2 className="has-text-weight-semibold is-size-2">{heading}</h2>
              <p className="is-size-5 has-text-weight-semibold">
                {description}
              </p>
            </div>
            <Pricing data={plans} />
          </div>
        </div>
        <div className="venmo">
          <div>
            We accept
            <img
              src={venmoLogo}
              alt="venmo logo"
              style={{ height: "4em", margin: "0 0 -34px -8px" }}
            />
          </div>
          <a
            className="btn venmo-btn"
            href={venmo}
            target="_blank"
            rel="noreferrer"
          >
            Pay
            <img
              src={venmoIcon}
              alt="venmo icon"
              style={{ height: "1.2em", margin: "0 0 -3px 8px" }}
            />
          </a>
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
