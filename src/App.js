import './App.css';
import Title from './Title.js';
import Input from './Input.js';
import Conversation from './Conversation.js';
import { useState } from 'react';


function App() {

  const [prompts, setPrompts] = useState([]);

  return (
    <div className="App">
      <Title />
      <Conversation prompts = {prompts}/>
      <Input prompts = {prompts} setPrompts = {setPrompts}/>
    </div>
  );
}

export default App;
