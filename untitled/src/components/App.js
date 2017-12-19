import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <h1>Task Runner</h1>
        <AddTodo />
        <VisibleTodoList/>
    </div>
)

export default App
