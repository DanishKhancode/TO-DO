//rcc -> react class component
import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      curTask: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.curTask,id:this.state.tasks.length+1}]
    })
  }

  render() {
    console.log("render method is called");
    return (
      //jsx starts
      // <div>Todo</div>
      <div>
        <input
          type="text"
          value={this.state.curTask}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

        {
          // use when need to write JS in jsx
          this.state.tasks.map(function (taskObj) {
            return (
              // key is leye de ha taki hr task ko ak unique no dena hota ha 
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button>Delete</button>
              </li>
            );
          })
        }
      </div>
    );
  }
}