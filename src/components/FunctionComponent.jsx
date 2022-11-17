import React from 'react';
import { useState } from 'react';

const FunctionalComponent = (props) => {
    const { name, age, id, setName } = props;
    const surname = "Brave " + name;
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    return (
        <div>
            <p>This is functional Component</p>
            <button onClick={() => { setCount(count + 1) }}> Click me to Add 1</button>
            <button onClick={() => { setCount(count - 1) }}> Click me to Subtract 1</button>
            <h1>{count}</h1>
            <h1>My name is {surname} I am {age}, My work Id is {id}</h1>
            <input onChange={(e) => setChangeName(e.target.value)}></input>
            <button onClick={() => { setName(changeName) }}>Change Name</button>

        </div>
    );
}

export default FunctionalComponent;