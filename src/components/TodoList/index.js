import React from 'react';
import TodoListItem from'./TodoListItem'

import './index.sass'

const TodoList = ({data}) => {
    return (
        <div className="todoList">
            <ul>
                {
                    data.map((data, index) => {
                        return (<TodoListItem data={data} key={index} />);
                    })
                }
            </ul>

        </div>
    )
}

export default TodoList;