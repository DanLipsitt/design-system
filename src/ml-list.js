import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

const MLList = (props) => <List {...props} />

MLList.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
}

MLList.defaultProps = {
  size: 'small',
  itemLayout: 'horizontal',
}

export default MLList
