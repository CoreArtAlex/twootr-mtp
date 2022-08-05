// import axios from 'axios';
// import React, { useEffect } from 'react';
import {StylePost} from './styles/Post.styles';

export default function Post(){
    // Use UseEffect & Axios to obtain the UserName from User.jsx
    // & Compose data from Compose.jsx

    let newPost = function(){
        <div>
            <img src="" alt="" />
            <label>Name + Last Name</label>
            <label>Username</label>
            <p>Twoot</p>
            <br></br>
            <label>Time Stamp</label>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    }
    return (
        <StylePost>
        <div>
            {newPost()}
        </div>
        </StylePost>
    );
}