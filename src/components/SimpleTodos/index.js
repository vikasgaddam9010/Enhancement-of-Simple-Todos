import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, newTodo: ''}

  onDeleteuser = id => {
    const {todosList} = this.state
    const index = todosList.findIndex(each => each.id === id)
    todosList.splice(index, 1)
    this.setState({todosList})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {newTodo, todosList} = this.state
    todosList.push({id: todosList.length + 1, title: newTodo, isChecked: false})
    this.setState({todosList})
  }

  onChangeNewtodo = event => {
    this.setState({newTodo: event.target.value})
  }

  passEachTodo = updatedTodoObj => {
    const {todosList} = this.state
    const newList = todosList.map(each =>
      each.id === updatedTodoObj.id ? updatedTodoObj : each,
    )

    this.setState({
      todosList: newList,
    })
  }

  passToIsChedObj = eachTitle => {
    const {todosList} = this.state
    const index = todosList.map(each =>
      each.id === eachTitle.id
        ? {...eachTitle, isChecked: !eachTitle.isChecked}
        : each,
    )
    this.setState({todosList: index})
  }

  passChaningTodo = obj => {
    // console.log(obj)
    const {todosList} = this.state
    const index = todosList.findIndex(each => each.id === obj.eachTitle.id)
    // console.log(index)
    todosList.splice(index, 1, {
      id: obj.eachTitle.id,
      title: obj.newtext,
      isChecked: obj.eachTitle.isChecked,
    })
    // console.log(todosList)
    this.setState({todosList})
  }

  render() {
    const {todosList} = this.state
    // console.log(todosList)
    return (
      <div className="container">
        <ul className="ulContainer">
          <h1>Simple Todos</h1>
          <form onSubmit={this.onSubmitForm} className="input-add-btn-center">
            <input
              placeholder="Input Your Todo Here"
              className="input"
              type="text"
              onChange={this.onChangeNewtodo}
            />
            <button className="add-submit-btn ad-btn" type="submit">
              Add
            </button>
          </form>
          {todosList.map(each => (
            <TodoItem
              onDeleteuser={this.onDeleteuser}
              passEachTodo={this.passEachTodo}
              passToIsChedObj={this.passToIsChedObj}
              passChaningTodo={this.passChaningTodo}
              eachTitle={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
