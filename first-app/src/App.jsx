import React from 'react';
import Greeting from './components/Greeting';
import ThemeToggle from './components/ThemeToggle';
import LoginMessage from './components/LoginMessage';
import TodoList from './components/TodoList';
import './App.css';

const tasks = ['Opiskele','Syö','Nuku','Rentoudu'];

function App() {
    return (
        <div className='container'>
            <Greeting name="Elias" />
            <ThemeToggle />
            <LoginMessage isLoggedIn={true} />
            <TodoList todos={tasks} />
        </div>
    );
}
export default App;
