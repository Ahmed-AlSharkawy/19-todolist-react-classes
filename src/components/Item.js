import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { id, title } = this.props.item
    const { startOperation } = this.props
    return (
      <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        <h6>{title}</h6>
        <div className='todo-icon'>
          <span
            className='mx-2 text-success'
            role='button'
            onClick={() => startOperation('e', id)}
          >
            <i className='fas fa-pen' />
          </span>
          <span
            className='mx-2 text-danger'
            role='button'
            onClick={() => startOperation('d', id)}
          >
            <i className='fas fa-trash' />
          </span>
        </div>
      </li>
    )
  }
}
