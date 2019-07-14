import React from 'react';
import './style.css';




class App extends React.Component {

    render() {
        const listItems = [
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            },
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            },
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            },
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            },
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            },
            {
                title: 'Call my boss',
                description: 'Do it',
                status: 'new'
            },
            {
                title: 'Call my mom',
                description: 'Do it today!',
                status: 'old'
            }
        ];
        return (
            <div id="todo-list">
                {listItems.map((item) => {
                    return (
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })}
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
