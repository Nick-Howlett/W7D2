import React from 'react';
import uniqueId from "../../util/utils"

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title: "",
      body: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const newToDo = {id : uniqueId(), title: this.state.title, body: this.state.body, done: false}
    this.props.receiveToDo(newToDo)
    this.setState({title: "", body: ""})
  }


  update(field){
    return e => (this.setState({[field]: e.target.value}))
  }

  render(){
    return (
      <>
        New ToDo:<br/>

        <label >Title:
          <input value={this.state.title} onChange={this.update("title")} type="text"/>
        </label>

        <br/>
        <label >Body:
          <input value={this.state.body} onChange={this.update("body")} type="text"/>
        </label>

        <input onClick={this.handleClick} type="submit" value="Make Todo!"/>
      </>  
    )
  }
}

export default TodoForm;