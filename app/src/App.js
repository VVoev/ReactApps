import React, { Component } from 'react';
import './App.css';

var todos = [
    {
        todoTitle:"My first Todo",
        todoResponsible:"Sebastian",
        todoDescription:"My first todo Description",
        todoPriority:"low"
    },
    {
        todoTitle:"My second Todo",
        todoResponsible:"Spas",
        todoDescription:"My second todo Description",
        todoPriority:"medium"
    },
    {
        todoTitle:"My third Todo",
        todoResponsible:"Bary",
        todoDescription:"My third todo Description",
        todoPriority:"high"
    }
]


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    removeIt(index){
        this.setState({
            todos:this.state.todos.filter((e,i)=>{
                return i !== index;
            })
        });
    }

    handleAddTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]});
    }



    render(){
        return(
            <div className="container">
                <TodoInput onAddTodo={this.handleAddTodo}></TodoInput>

                <hr/>
                <h4>Todos Count: <span className="badge">{this.state.todos.length}</span></h4>
                <ul className="list-group">
                    {this.state.todos.map((todo,index)=>
                    <li className="list-group-item" key={index}>
                        <h4>{todo.todoTitle}<small><span className="label-info">{todo.todoPriority}</span></small></h4>
                        <p><span className="glyphicon glyphicon-user">{todo.todoResponsible}</span></p>
                        <p>{todo.todoDescription}</p>
                        <button className="btn btn-danger btn-sm" onClick={this.removeIt.bind(this,index)}><span className="glyphicon glyphicon-trash"></span>Delete</button>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}


export class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state={
            todoTitle:'',
            todoUser:'',
            todoDescription:'',
            priority:"low"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            todoTitle: '',
            todoResponsible: '',
            todoDescription: '',
            todoPriority: 'Lowest'
        });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target+name+value)
        this.setState({
            [name]: value
        });
    }


    render(){
        return(
            <div>
                <h4>Add New Todo</h4>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
                        <div className="col-sm-10">
                            <input  name="todoTitle"
                                    type="text"
                                    className="form-control"
                                    id="inputTodoTitle"
                                    value={this.state.todoTitle}
                                    onChange={this.handleInputChange}
                                    placeholder="Title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
                        <div className="col-sm-10">
                            <input  name="todoResponsible"
                                    type="text"
                                    className="form-control"
                                    id="inputTodoResponsible"
                                    value={this.state.todoResponsible}
                                    onChange={this.handleInputChange}
                                    placeholder="Responsible"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                <textarea   name="todoDescription"
                            className="form-control"
                            rows="3"
                            id="inputTodoDesc"
                            value={this.state.todoDescription}
                            onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
                        <div className="col-sm-10">
                            <select   name="todoPriority"
                                      className="form-control"
                                      id="inputTodoPriority"
                                      value={this.state.todoPriority}
                                      onChange={this.handleInputChange}>
                                <option>Lowest</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Highest</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-success">Add Todo</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
