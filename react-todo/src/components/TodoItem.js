import React from "react"
import styles from "./TodoItem.module.css"
// Class Component
class TodoItem extends React.Component {


  render() {
    return <li className={styles.item}><button onClick={()=>this.props.deleteTodoProps(this.props.todo.id)}>X</button>
    <input type="checkbox" className={styles.checkbox} checked={this.props.todo.completed} onChange={()=>this.props.handleChangeProps(this.props.todo.id)}/>{this.props.todo.title}</li>
  }
}

// Function Component
/*function TodoItem(props){
  return <li>{props.todo.title}</li>
}*/

export default TodoItem