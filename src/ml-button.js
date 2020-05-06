import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import './ml-button.less'

/**
 * Component description from [JSDoc](https://jsdoc.app/about-getting-started.html) code comments. Can use **Markdown** here.
 */
const MLButton = (props) => {
  let type
  let className
  if (props.type === 'highlight') {
    type = 'primary'
    className = 'ml-btn-highlight'
  } else {
    type = props.type
    className = ''
  }
  return (
    <Button {...props} type={type} className={[props.className, 'ml-btn', className].join(' ')}>
      {props.children}
    </Button>
  )
}

// MarkLogic Defaults
MLButton.defaultProps = {
  size: 'small',
}

// Typechecking for Ant Design properties
MLButton.propTypes = {
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ delay: PropTypes.number }),
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  block: PropTypes.bool,
}

export default MLButton
