import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
    const { items, isEmpty, startOperation } = this.props
    return (
      <ul className='list-group my-5'>
        <h3 className='text-center'>ToDo List</h3>
        {items.map((item) => {
          return (
            <Item key={item.id} item={item} startOperation={startOperation} />
          )
        })}
        <button
          type='button'
          className={`btn ${
            isEmpty ? 'btn-secondary disabled' : 'btn-danger'
          }  btn-block mt-5`}
          onClick={() => startOperation('c')}
        >
          Clear List
        </button>
      </ul>
    )
  }
}
