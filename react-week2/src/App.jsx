import { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';
import './App.css';

function App() {
    const [name, setName] = useState('');

    return (
        <div className="container">
            <NameInput setName={setName} />
            <Greeting name={name} />
            <Weekdays />
        </div>
    );
}

export default App;
