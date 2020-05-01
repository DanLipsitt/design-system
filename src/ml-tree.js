import React from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'

function onSelect(key) {
  console.log(key)

  if (false) {
    // ...
  }
}

const MLTree = (props) => {
  return (
    <Tree onSelect={onSelect} {...props} />
  )
}

export default MLTree
