import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pricing from '../components/Pricing'

export const PricingPageTemplate = ({
  pricing,
}) => (
  <div className="content">
    <section className="section section--gradient">
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
  </div>
)

PricingPageTemplate.propTypes = {
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PricingPageTemplate
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        pricing {
          heading
          description
          plans {
            description
            plan
            price
          }
        }
      }
    }
  }
`
