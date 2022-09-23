import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';



const  App = () => {

    const  [message, setMsg] = useState("");
    const handleClick = async() => {

        const data = await window.fetch('/first');
        const json = data.json();
        const msg = json.msg;
        setMsg(msg);

    }

    return (
        <div className="container">
            <button onClick={handleClick}>login to spotify</button>
            {console.log(message)}
            <p>{message}</p>
            <button >Get play</button>
        </div>
    );
}



export default App;
