import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './components/Input'
import List from './components/List'

export default class App extends Component {
  state = {
    items: [],
    item: '',
    adding: true,
    editing: false,
    deleting: false,
    deletingAll: false,
  }

  handleTyping(e) {
    console.log('type')
  }
  handleSubmit(id = '') {
    console.log('submit')
  }
  addItem() {
    console.log('add')
  }
  editItem(id) {
    console.log('edit')
  }
  deleteItem(id) {
    console.log('delete')
  }
  deleteAll(id) {
    console.log('delete all')
  }

  resetStates() {
    // const adding = !this.state.adding
    // const editing = !this.state.editing
    // const deleting = !this.state.deleting
    // const deletingAll = !this.state.deletingAll
    // this.setState({ ...adding, editing, deleting, deletingAll })
    console.log(this.state)
  }
  render() {
    console.log(this.state)

    return (
      <div>
        <h1 onClick={this.resetStates}>App</h1>
        <Input
          handleTyping={this.handleTyping}
          handleSubmit={this.handleSubmit}
        />
        <List />
      </div>
    )
  }
}
