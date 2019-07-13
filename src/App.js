import React from 'react';
import './style.css';
import TodoItem from "./TodoItem";


const todoList = [{
    title: 'Do my homework',
    description: "Don't forget to do it",
    status: 'new',
}, {
    title: 'Buy milk and rice',
    description: "Don't forget to do it",
    status: 'progress',
}, {
    title: 'Take the kids to school',
    description: "Don't forget to do it",
    status: 'done',
}, {
    title: 'Call my boss',
    description: "Don't forget to do it",
    status: 'progress',
}, {
    title: 'Fix my car',
    description: "Don't forget to do it",
    status: 'done',
}, {
    title: 'Send flowers to my wife',
    description: "Don't forget to do it",
    status: 'new',
}, {
    title: 'Send flowers to my mom',
    description: "Don't forget to do it",
    status: 'new',
}];

export {todoList};


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: todoList,
            editMode: -1,
            activeFilter: null
        };
        // this.sayHello();

    };

    sayHello = () => {
        alert('Hello!')
    };

    moveItemUp = (index) => {
        const {items} = this.state;
        const temp = items[index];
        items[index] = items[index - 1];
        items[index - 1] = temp;

        this.setState({
            items: items
        });

        this.switchMode();
    };
    moveItemDown = (index) => {
        const {items} = this.state;
        const temp = items[index];
        items[index] = items[index + 1];
        items[index + 1] = temp;

        this.setState({
            items: items
        });

        this.switchMode();
    };

    deleteItem = (index) => {
        const {items} = this.state;
        const updatedItems = items.filter((item, i) => {
            if (i !== index) {
                return item
            }
        });

        this.setState({
            items: updatedItems
        })
    };

    switchMode = (index) => {
        const isActive = this.state.editMode === index;
        this.setState({
            editMode: isActive ? -1 : index
        })
    };

    changeStatus = (e) => {
        const {items} = this.state;
        const value = e.target.value;
        const index = e.target.getAttribute('data-index');
        items[index].status = value;

        this.setState({
            items: items
        })
    };

    handleChange = (e) => {
        const {items} = this.state;
        const name = e.target.name;
        const value = e.target.value;
        const index = e.target.getAttribute('data-index');
        items[index][name] = value;

        this.setState({
            items: items
        })
    };

    filterByStatus = (e) => {
        const {filterByStatus, items} = this.state;
        const name = e.target.name;
        const isChecked = e.target.checked;

        // const filteredItems = filterByStatus === name ? items : items.filter(item => item.status === name);
        const filteredStatus = filterByStatus === name ? null : name;

        const filteredItems = !isChecked ? items : items.map((item, i) => {
            item.hide = name !== 'all' && item.status !== name;
            return item
        });

        this.setState({
            items: filteredItems,
            filteredStatus: filteredStatus
        });


    };


    addNewItem = () => {
        const {items} = this.state;
        const emptyItem = [{
            title: 'New Item',
            description: 'New item description',
            status: 'new'
        }];

        this.setState({
            items: emptyItem.concat(items)
        });

        this.switchMode(0)
    };

    render() {
        const {editMode, filteredStatus} = this.state;
        return (
            <div id={'todo-list'}>

                <div id={'todo-list-header'}>
                    <h1>My Todo List</h1>
                    <button onClick={this.addNewItem}>Add New Item</button>
                </div>

                <div id={'todo-list-filter'}>
                    <div>
                        <input type={'checkbox'}
                               name={'new'}
                               checked={filteredStatus === 'new'}
                               onChange={this.filterByStatus}/>
                        <label>new</label>
                    </div>
                    <div>
                        <input type={'checkbox'}
                               name={'progress'}
                               checked={filteredStatus === 'progress'}
                               onChange={this.filterByStatus}/>
                        <label>progress</label>
                    </div>
                    <div>
                        <input type={'checkbox'}
                               name={'done'}
                               checked={filteredStatus === 'done'}
                               onChange={this.filterByStatus}/>
                        <label>done</label>
                    </div>
                    <div>
                        <input type={'checkbox'}
                               name={'all'}
                               checked={false}
                               onChange={this.filterByStatus}/>
                        <label>reset</label>
                    </div>
                </div>

                <div id={'todo-list-items'}>
                    {this.state.items.map((item, i) => {
                        if (!item.hide) {
                            return (
                                <TodoItem key={i}
                                          index={i}
                                          {...item}
                                          editMode={editMode}
                                          actions={{
                                              handleChange: this.handleChange,
                                              changeStatus: this.changeStatus,
                                              moveItemUp: this.moveItemUp,
                                              moveItemDown: this.moveItemDown,
                                              switchMode: this.switchMode,
                                              deleteItem: this.deleteItem,
                                          }} />
                            )
                            // return (
                            //     <div>
                            //         <div>
                            //             <h3>Name: Israel</h3>
                            //             <p>Age: 73</p>
                            //         </div>
                            //         <div>
                            //             <h3>Name: USA</h3>
                            //             <p>Age: 243</p>
                            //         </div>
                            //         <div>
                            //             <h3>Name: France</h3>
                            //             <p>Age: 230</p>
                            //         </div>
                            //     </div>
                            // )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default App;
