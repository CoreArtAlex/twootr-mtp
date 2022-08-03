import React from 'react';
import {StylePost} from './styles/Post.styles';

export default function Post(){
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