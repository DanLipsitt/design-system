import React from 'react'
import { MLList } from 'marklogic-ui-library'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { List } from 'antd'

export default {
  component: 'MLList',
  title: 'Data Display/MLList',
  decorators: [withKnobs],
}

const data = ['first', 'second', 'third']

export const basic = () => <MLList
  dataSource={data}
  renderItem={
    item => <List.Item>{item}</List.Item>
  }
  itemLayout={radios('Item Layout', ['horizontal', 'vertical'], 'horizontal')}
  size={radios('Size', ['small', 'default', 'large'], 'small')}
/>
