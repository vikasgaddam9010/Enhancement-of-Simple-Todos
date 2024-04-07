// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachTitle, onDeleteuser} = this.props
    const onDelete = () => {
      onDeleteuser(eachTitle.id)
    }
    return (
      <li className="liContainer">
        <p>{eachTitle.title}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    )
  }
}

export default TodoItem
