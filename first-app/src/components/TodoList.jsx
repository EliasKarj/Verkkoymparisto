import React from 'react';

export default function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}
