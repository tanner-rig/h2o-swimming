import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import { AboutSection } from "./about-section";
import { PricingSection } from "./pricing-section";
import { ContactSection } from "./contact-section";
import { WaiverSection } from "./waiver-section";
import { HoursSection } from "./hours-section";

export const IndexPageTemplate = ({ main, hours, pricing, about, waiver, contact }) => {
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!main.image.childImageSharp
              ? main.image.childImageSharp.fluid.src
              : main.image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: "rgb(255, 255, 255, .3)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {main.title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              backgroundColor: "rgb(255, 255, 255, .3)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {main.subheading}
          </h3>
        </div>
      </div>
      <section className="section-wrap section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{main.mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{main.mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {main.heading}
                      </h3>
                      <p>{main.description}</p>
                    </div>
                  </div>
                  {main.signup && <div className="columns">
                    <div className="column is-12">
                      <a className="btn" href={main.signup} target='_blank'>
                        Sign up
                      </a>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection pricing={pricing} />
      <HoursSection hours={hours} />
      <AboutSection
        title={about.title}
        subtitle={about.subtitle}
        body={about.body}
      />
      <WaiverSection
        title={waiver.title}
        description={waiver.description}
        waiverLink={waiver.waiverLink}
      />
      <ContactSection
        description={contact.description}
      />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  main: PropTypes.object,
  hours: PropTypes.object,
  about: PropTypes.object,
  pricing: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        main={frontmatter.main}
        hours={frontmatter.hours}
        about={frontmatter.about}
        pricing={frontmatter.pricing}
        contact={frontmatter.contact}
        waiver={frontmatter.waiver}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        main {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          signup
          heading
          subheading
          mainpitch {
            title
            description
          }
          description
        }
        hours {
          heading
          description
        }
        pricing {
          heading
          description
          venmo
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          plans {
            description
            plan
            price
          }
        }
        about {
          title
          subtitle
          body
        }
        contact {
          description
        }
        waiver {
          title
          description
          waiverLink
        }
      }
    }
  }
`;
