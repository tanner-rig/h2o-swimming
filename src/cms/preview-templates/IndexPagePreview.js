import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('DATAA: ', data)

  if (data) {
    return (
      <IndexPageTemplate
        main={data.main}
        hours={data.hours}
        pricing={data.pricing}
        about={data.about}
        // aboutContent={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
