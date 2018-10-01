import React from 'react';


const TodoListItem = ({data}) => {
    return (
        <li className="todoListItem">
            <div className="bt-group">
                <span className="delete" title="Delete"  onClick={this.DeleteItem}>x</span>
            </div>
            <div className="todoListItem-title">
                {data.title}
            </div>
            <div className="todoListItem-descr">
                {data.description}
            </div>
        </li>
    )
}

export default TodoListItem;