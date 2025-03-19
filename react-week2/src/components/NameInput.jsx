import { useState } from 'react';

export default function NameInput({ setName }) {
    const handleChange = (e) => setName(e.target.value);

    return (
        <div>
            <label htmlFor="name-input">Enter your name:</label>
            <input 
                id="name-input"
                type="text"
                placeholder="Type your name here..."
                onChange={handleChange}
            />
        </div>
    );
}
