import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import List from './components/List';
import UserInfo from './components/UserInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <List />
      <UserInfo name="Elias" age={25} />
      <Footer />
    </div>
  );
}

export default App;
