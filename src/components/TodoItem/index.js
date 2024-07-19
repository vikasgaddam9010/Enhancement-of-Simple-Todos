// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {isEditBtnClicked: false, textToUpdate: ''}

  clickToEdit = () => {
    this.setState(prev => ({isEditBtnClicked: !prev.isEditBtnClicked}))
  }

  passChaningFunction = () => {
    const {eachTitle, passChaningTodo} = this.props
    const {textToUpdate} = this.state
    passChaningTodo({eachTitle, newtext: textToUpdate})
  }

  onChangeToUpdateTodo = event => {
    const te = event.target.value
    this.setState({textToUpdate: te}, this.passChaningFunction)
  }

  clickToSave = () => {
    const {eachTitle, passEachTodo} = this.props
    const {textToUpdate} = this.state

    const updatedTodoObj = {...eachTitle, title: textToUpdate}
    passEachTodo(updatedTodoObj)

    this.setState(prev => ({
      isEditBtnClicked: !prev.isEditBtnClicked,
      textToUpdate: '',
    }))
  }

  isClikedInput = () => {
    const {eachTitle, passToIsChedObj} = this.props
    passToIsChedObj(eachTitle)
  }

  render() {
    const {eachTitle, onDeleteuser} = this.props
    const {isEditBtnClicked} = this.state

    const onDelete = () => {
      onDeleteuser(eachTitle.id)
    }

    return (
      <li className="liContainer">
        {isEditBtnClicked ? (
          <div>
            <input
              id={`ch ${eachTitle.id}`}
              className="input-to-edit-text"
              type="text"
              onChange={this.onChangeToUpdateTodo}
              placeholder="Update Your Todo Here"
              value={eachTitle.title}
            />
          </div>
        ) : (
          <div className="d-flex">
            <input
              className="m-2"
              onClick={this.isClikedInput}
              checked={eachTitle.isChecked}
              type="checkbox"
            />
            <p className={`${eachTitle.isChecked && 'strike'} w-5`}>
              {eachTitle.title}
            </p>
          </div>
        )}

        <div>
          <button type="button" className="del-btn" onClick={onDelete}>
            Delete
          </button>
          {isEditBtnClicked ? (
            <button type="button" onClick={this.clickToSave}>
              Save
            </button>
          ) : (
            <button type="button" onClick={this.clickToEdit}>
              Edit
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default TodoItem
