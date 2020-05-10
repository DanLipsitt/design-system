import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'
import './style'

const MLDivider = (props) => {
  return (
    <Divider {...props}>
      {props.children}
    </Divider>
  )
}

export default MLDivider
