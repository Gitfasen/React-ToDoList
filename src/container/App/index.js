import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.sass';

import data from '../../data';
import '../../components/TodoList';
import TodoList from "../../components/TodoList";

class Index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        display: {
            display: 'none'
        },
        title: '',
        description: '',
        items: data,
      };
  }
  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
      const updatedList = this.state.items;
      updatedList.unshift({title: this.state.title, description: this.state.description});
      this.setState({title: '', description: '', items: updatedList});
      e.preventDefault();
  }
  render() {
      const { items } = this.state;
      return <div className="app">
          <header className="header">
              <img src={logo} className="logo" alt="logo"/>
              <h1 className="title">Welcome to React</h1>
          </header>
          <div className="container">
              <div className="form-group">
                  <form className="form" onSubmit={this.handleSubmit}>
                      <div className="bt-add-cart" onClick={()=> {this.setState({display: {display: 'block'}})}}>+</div>
                      <div className="form-body" style={this.state.display}>
                          <div className="bt-group">
                              <input type="submit" className="save" title="Save" value="✓" onClick={()=> {this.setState({display: {display: 'none'}})}}/>
                          </div>
                          <input type="text" name="title" placeholder="Title" className="form-input" value={this.state.title} onChange={this.handleChange}/>
                          <textarea name="description" placeholder="Description" id="toList" className="form-textarea" value={this.state.description} onChange={this.handleChange}/>
                      </div>
                  </form>
              </div>
              <TodoList data={items}/>
          </div>
      </div>;
  }
}

export default Index;
