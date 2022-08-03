import React, { useState } from 'react';
import {StyleCompose} from './styles/Compose.styles';

export default function Compose(){
    const [compose,setCompose] = useState([]);
    // Use UseEffect & Axios to obtain the UserName from User.jsx
    return (
        <StyleCompose>
        <div>
            <label>Compose Twoot</label>
            <form action="">
                <input type="text" />
                <br></br>
                <button>Twoot</button>
                <label htmlFor="">Counter</label>
            </form>
        </div>
        </StyleCompose>
    );
}