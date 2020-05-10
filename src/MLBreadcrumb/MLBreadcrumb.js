import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import './style'
const { Item } = Breadcrumb

const MLBreadcrumb = (props) => {
  return (
    <Breadcrumb {...props}>
      {props.children}
    </Breadcrumb>
  )
}

export default MLBreadcrumb
