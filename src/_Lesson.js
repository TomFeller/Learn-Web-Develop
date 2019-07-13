import React from 'react';
import './style.css';




class App extends React.Component {

    sayHello = () => {
        alert("Hello!");
    };

    render() {
        this.sayHello()
        return (
            <div id="todo-list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}



class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <h3>Name: Israel</h3>
                <p>Age: 71</p>
                <p>Population: 8,700,000</p>
            </div>
        )
    }
}

export default App;
