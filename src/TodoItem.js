import React from 'react';
import './style.css';

class TodoItem extends React.Component {
    render() {
        const {editMode, actions} = this.props;
        const {status, index, title, description} = this.props;
        const {handleChange, changeStatus, moveItemUp, moveItemDown, switchMode, deleteItem} = actions;
        return (
            <div className={`todo-item ${status}`}>
                {editMode === index ?
                    <div>
                        <input placeholder='Insert item title'
                               value={title}
                               name='title'
                               data-index={index}
                               onChange={handleChange}/>

                        <textarea placeholder='Insert item description'
                                  value={description}
                                  name='description'
                                  rows='5'
                                  data-index={index}
                                  onChange={handleChange}/>
                        <select value={status} data-index={index}
                                onChange={changeStatus}>
                            <option>new</option>
                            <option>progress</option>
                            <option>done</option>
                        </select>
                    </div>
                    :
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>Status: {status}</p>
                    </div>
                }

                <div className={'change-order'}>
                    <h4>Actions:</h4>
                    <span className={'action-button'}
                          onClick={() => moveItemUp(index)}>&#8593;</span>
                    <span className={'action-button'}
                          onClick={() => moveItemDown(index)}>&#8595;</span>
                    <span className={'action-button'}
                          onClick={() => deleteItem(index)}>&#10008;</span>
                    <span className={'action-button'}
                          onClick={() => switchMode(index)}>
                                            {editMode === index ? <span>&#10004;</span> : <span>&#10000;</span>}
                                            </span>
                </div>
            </div>
        )
    }
}

export default TodoItem;