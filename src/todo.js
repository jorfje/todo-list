import React, { Component } from 'react';
import {Input, List, Icon} from 'antd';
import 'antd/dist/antd.css';

class TodoItem extends Component {
    
    remove = () => {
        this.props.removeTodo(this.props.todo);
    };
    check = () => {
        this.props.checkTodo(this.props.todo);
    };
    render() {
        return (
          <List.Item className={this.props.todo.checked? 'todoItem': null} 
            actions={[
              <Icon
                type="check-square"
                theme="filled"
                onClick={this.check}
              />, 
              <Icon
                type="close-square"
                theme="filled"
                onClick={this.remove}
              />
            ]}
          >
            {this.props.todo.content}
          </List.Item>
          
        );
      }
}


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoes: [],
        };
    }

    handlePressEnter = e => {
        const todo = {
            content: e.target.value,
            checked: false,
        };

        const newTodoes = this.state.todoes.concat(todo);

        this.setState({
            todoes: newTodoes
        });

        e.target.value = "";
    }

    removeTodo = todo => {
        const { todoes } = this.state;
        todoes.splice(todoes.indexOf(todo), 1);
        this.setState({
            todoes: todoes
        });
    }

    checkTodo = todo => {
        let newTodoes = this.state.todoes;
        todo.checked = !todo.checked;

        this.setState({
            todoes: newTodoes
        });
    }
  render() {
    return (
      <div className="todoContainer">
        <h1>List of things that need to be done</h1>

        <Input
         placeholder='What needs to be done?'
         onPressEnter={this.handlePressEnter}
        />
        <List
                className="todoList"
                dataSource={this.state.todoes}
                renderItem={item => (<TodoItem todo={item} checkTodo={this.checkTodo} removeTodo={this.removeTodo}/>)}
            />
      </div>
    );
  }
}
