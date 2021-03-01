import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { AboutSection } from "./about-section";
import { PricingSection } from "./pricing-section";
import { ContactSection } from "./contact-section";
import { WaiverSection } from "./waiver-section";
import { HoursSection } from "./hours-section";

export const IndexPageTemplate = ({
  main,
  hours,
  pricing,
  about,
  waiver,
  contact,
}) => {
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
          <img
            src={
              !!main.logo.childImageSharp
                ? main.logo.childImageSharp.fluid.src
                : main.logo
            }
            alt="main logo"
            style={{ height: 260, marginTop: 45 }}
          />
        </div>
      </div>
      <section className="section-wrap section--gradient">
        <div className="container container-border">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile" style={{ display: 'flex', justifyContent: 'center'}}>
                      <h1 className="title">{main.mainpitch.title}</h1>
                    </div>
                    <div className="tile" style={{ textAlign: 'center'}}>
                      <h4 >{main.mainpitch.description}</h4>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2" style={{ textAlign: 'center'}}>
                        {main.heading}
                      </h3>
                      <p style={{ textAlign: 'center'}}>{main.description}</p>
                    </div>
                  </div>
                  <div className="sign-up">
                    {main.signup && (
                      <div className="columns">
                        <div className="column is-12 signup-btn">
                          <a
                            className="btn"
                            href={main.signup}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Schedule lesson
                          </a>
                        </div>
                      </div>
                    )}
                    <img
                      src={
                        !!main.mainpitch.image.childImageSharp
                          ? main.mainpitch.image.childImageSharp.fluid.src
                          : main.mainpitch.image
                      }
                      alt="Jenny's pool"
                      style={{ height: 270 }}
                    />
                  </div>
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
        image={about.image}
        body={about.body}
      />
      <WaiverSection
        title={waiver.title}
        description={waiver.description}
        waiverLink={waiver.waiverLink}
      />
      <ContactSection description={contact.description} image={contact.image} />
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
          logo {
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
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
        hours {
          heading
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          days {
            description
            day
            topic
          }
        }
        about {
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
        }
        waiver {
          title
          description
          waiverLink
        }
        contact {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
