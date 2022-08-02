import React from 'react';
import {StylePost} from './styles/Post.styles';

export default function Post(){
    let newPost = function(){
        <div>
            {/* <image></image> */}
            <label>Name + Last Name</label>
            <label>Username</label>
            <p>Twoot</p>
            <br></br>
            <label>Time Stamp</label>
            {/* <image>Flag</image>
            <image>Retwoot</image>
            <image>Heart</image> */}
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