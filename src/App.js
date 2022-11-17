import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionComponent';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Shrown");
  return (
    <div className="App">
      <h1>
        Class Component
      </h1>
      <ClassComponent />
      <h1>
        Fucntional Component
      </h1>
      <FunctionalComponent name={name} age={20} id={"007"} setName={setName} />
    </div>
  );
}

export default App;
