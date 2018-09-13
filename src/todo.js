import React, { Component } from 'react';
import {Input, List, Icon} from 'antd';
import 'antd/dist/antd.css';

class TodoItem extends Component {
    
    remove = () => {
        this.props.removeTodo(this.props.todo.index);
    };
    check = () => {
        this.props.checkTodo(this.props.todo.index);
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
            index: this.state.todoes.length,
            content: e.target.value,
            checked: false,
        };

        const newTodoes = this.state.todoes.concat(todo);

        this.setState({
            todoes: newTodoes
        });

        e.target.value = "";
    }

    removeTodo = index => {
        let newTodoes = this.state.todoes;
        newTodoes.splice(index, 1);

       for (let i = index; i < newTodoes.length; i++){
           newTodoes[i].index -= 1;
       }

        this.setState({
            todoes: newTodoes
        });
    }

    checkTodo = index => {
        let newTodoes = this.state.todoes;
        newTodoes[index].checked = !newTodoes[index].checked;

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
