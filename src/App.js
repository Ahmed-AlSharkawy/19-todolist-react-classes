import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Input from './components/Input'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    title: '',
    states: {
      isAdding: true,
      isEditing: false,
      isDeleting: false,
      isDeletingAll: false,
    },
    isEmpty: true,
  }

  handleTyping = (e) => {
    this.setState({ title: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { isAdding, isEditing, isDeleting, isDeletingAll } = this.state.states
    if (isAdding) {
      this.addItem()
    } else if (isEditing) {
      this.editItem(this.state.id)
    } else if (isDeleting) {
      this.deleteItem(this.state.id)
    } else if (isDeletingAll) {
      this.deleteAll()
    }
    this.resetStates()
  }
  addItem = () => {
    if (this.state.title) {
      const newItem = { id: this.state.id, title: this.state.title }
      this.setState({ items: [...this.state.items, newItem] })
    }
  }
  editItem = (id) => {
    const newItems = this.state.items.map((item) => {
      if (item.id === id) item.title = this.state.title
      return item
    })
    this.setState({ items: newItems })
  }
  deleteItem = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({ items: newItems })
  }
  deleteAll = (id) => {
    this.setState({ items: [] })
  }
  startOperation = (operation, id = '') => {
    if (this.state.states.isAdding) {
      if (operation === 'e') {
        this.setState({
          id: id,
          title: this.state.items.find((item) => item.id === id).title,
          states: {
            isAdding: false,
            isEditing: true,
            isDeleting: false,
            isDeletingAll: false,
          },
        })
      } else if (operation === 'd') {
        this.setState({
          id: id,
          title: this.state.items.find((item) => item.id === id).title,
          states: {
            isAdding: false,
            isEditing: false,
            isDeleting: true,
            isDeletingAll: false,
          },
        })
      } else if (operation === 'c') {
        this.setState({
          states: {
            isAdding: false,
            isEditing: false,
            isDeleting: false,
            isDeletingAll: true,
          },
        })
      }
    }
  }
  resetStates = () => {
    this.setState(
      {
        id: uuidv4(),
        title: '',
        states: {
          isAdding: true,
          isEditing: false,
          isDeleting: false,
          isDeletingAll: false,
        },
      },
      () => this.setState({ isEmpty: this.state.items.length < 1 })
    )
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <Input
              handleTyping={this.handleTyping}
              handleSubmit={this.handleSubmit}
              resetStates={this.resetStates}
              title={this.state.title}
              id={this.state.id}
              states={this.state.states}
            />
            <List
              items={this.state.items}
              isEmpty={this.state.isEmpty}
              startOperation={this.startOperation}
            />
          </div>
        </div>
      </div>
    )
  }
}
