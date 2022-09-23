import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';



const  App = () => {

    const  [msg, setmsg] = useState("");
    const handleClick = async() => {

        const data = await fetch('/first');
        const json = data.json();
        const msg = json.msg
        setmsg(msg)

    }

    return (
        <div className="container">
            <button onClick={handleClick}>login to spotify</button>
            <p>{msg}</p>
            <button >Get play</button>
        </div>
    );
}



export default App;
