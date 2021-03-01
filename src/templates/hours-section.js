import React from "react";

export const HoursSection = ({ heading, description, image, days }) => (
  <section className="section-wrap section--gradient" id="hours">
    <div className="container container-border">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div style={{ textAlign: "center" }}>
              <h2 className="has-text-weight-semibold is-size-2">{heading}</h2>
              <p className="is-size-5" style={{ paddingBottom: "1rem" }}>
                {description}
              </p>
            </div>
            <div className="columns">
              {days.map((d) => (
                <div key={d.day} className="column">
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
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }
                alt="kids swimming"
                style={{
                  height: 270,
                  marginTop: 45,
                  boxShadow: "0px 31px 35px -19px rgb(0 0 0 / 30%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
