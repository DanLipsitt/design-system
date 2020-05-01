import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import MLTree from '../ml-tree'

const treeData = [
  {
    title: 'node 1',
    key: '1',
    children: [
      {
        title: 'node 2',
        key: '2',
        children: [],
      },
    ],
  },
]

describe('MLTree', () => {

  test('renders nodes', () => {
    const {getByText} = render(<MLTree treeData={treeData} />)
    getByText('node 1')
    getByText('node 2')
  })

  test.each(['node 1', 'node 2'])('check %s by clicking text', (label) => {
    const {getByText} = render(<MLTree treeData={treeData} />)
    const node = getByText(label)
    fireEvent.click(node)
    expect(node).toBeChecked()
  })

})
