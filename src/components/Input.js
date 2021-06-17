import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { title, handleTyping, handleSubmit, resetStates } = this.props
    const { isAdding, isEditing, isDeleting, isDeletingAll } = this.props.states

    const inputElement = () => {
      if (isAdding || isEditing) {
        return (
          <>
            {isEditing && (
              <h5 className='text-center text-danger mb-3'>Are you sure?</h5>
            )}
            <div className='input-group'>
              <div className='input-group-prepend'>
                <div
                  className='input-group-text bg-primary text-white'
                  style={{ height: '100%' }}
                >
                  <i className='fas fa-book' />
                </div>
              </div>
              <input
                type='text'
                className='form-control text-capitalize'
                placeholder='add item'
                value={title}
                onChange={handleTyping}
              />
            </div>
          </>
        )
      } else if (isDeleting) {
        return (
          <>
            <h5 className='text-center text-danger mb-3'>Delete this item?</h5>
            <h5 className='text-center mb-2'>
              <span className='text-capitalize text-dark bg-warning py-1 px-3'>
                {title}
              </span>
            </h5>
          </>
        )
      } else if (isDeletingAll) {
        return <h5 className='text-center text-danger mb-3'>Clear the list?</h5>
      }
    }

    const dismissElement = () => {
      if (isEditing || isDeleting || isDeletingAll) {
        return (
          <button
            className='btn btn-block btn-secondary mt-3 text-uppercase'
            style={{ width: '100%' }}
            onClick={() => resetStates()}
          >
            No, Dismiss
          </button>
        )
      }
    }

    const btnText = () => {
      if (isAdding) {
        return 'Add Item'
      } else if (isEditing) {
        return 'Update Item'
      } else if (isDeleting) {
        return 'Delete Item'
      } else if (isDeletingAll) {
        return 'Clear List'
      }
    }

    return (
      <>
        <h3 className='text-center'>ToDo Input</h3>
        <div className='card card-body my-3'>
          <form onSubmit={handleSubmit}>
            {inputElement()}
            {dismissElement()}
            <button
              className='btn btn-block btn-primary mt-3 text-uppercase'
              type='submit'
              style={{ width: '100%' }}
            >
              {btnText()}
            </button>
          </form>
        </div>
      </>
    )
  }
}
